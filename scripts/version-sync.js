#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Comprehensive version synchronization utility
 * Supports multiple operations: sync, check, watch
 */
class VersionSync {
    constructor() {
        this.packageJsonPath = path.join(__dirname, "..", "package.json");
        this.indexHtmlPath = path.join(__dirname, "..", "public", "index.html");
    }

    /**
     * Get version from package.json
     */
    getPackageVersion() {
        try {
            const packageJson = JSON.parse(fs.readFileSync(this.packageJsonPath, "utf8"));
            return packageJson.version;
        } catch (error) {
            throw new Error(`Failed to read package.json: ${error.message}`);
        }
    }

    /**
     * Get version from index.html
     */
    getHtmlVersion() {
        try {
            const htmlContent = fs.readFileSync(this.indexHtmlPath, "utf8");
            const versionMatch = htmlContent.match(/<meta\s+name="version"\s+content="([^"]*)"\s*\/>/);
            return versionMatch ? versionMatch[1] : null;
        } catch (error) {
            throw new Error(`Failed to read index.html: ${error.message}`);
        }
    }

    /**
     * Update version in index.html
     */
    updateHtmlVersion(version) {
        try {
            let htmlContent = fs.readFileSync(this.indexHtmlPath, "utf8");
            const versionMetaRegex = /<meta\s+name="version"\s+content="[^"]*"\s*\/>/;
            const newVersionMeta = `<meta name="version" content="${version}" />`;

            if (versionMetaRegex.test(htmlContent)) {
                htmlContent = htmlContent.replace(versionMetaRegex, newVersionMeta);
                fs.writeFileSync(this.indexHtmlPath, htmlContent, "utf8");
                return true;
            } else {
                throw new Error("Version meta tag not found in index.html");
            }
        } catch (error) {
            throw new Error(`Failed to update index.html: ${error.message}`);
        }
    }

    /**
     * Synchronize versions
     */
    sync() {
        try {
            const packageVersion = this.getPackageVersion();
            const htmlVersion = this.getHtmlVersion();

            console.log(`📦 Package version: ${packageVersion}`);
            console.log(`🌐 HTML version: ${htmlVersion || "not found"}`);

            if (packageVersion === htmlVersion) {
                console.log("✅ Versions are already synchronized");
                return true;
            }

            this.updateHtmlVersion(packageVersion);
            console.log(`✅ Updated HTML version to ${packageVersion}`);
            return true;
        } catch (error) {
            console.error(`❌ Sync failed: ${error.message}`);
            return false;
        }
    }

    /**
     * Check if versions are synchronized
     */
    check() {
        try {
            const packageVersion = this.getPackageVersion();
            const htmlVersion = this.getHtmlVersion();

            console.log(`📦 Package version: ${packageVersion}`);
            console.log(`🌐 HTML version: ${htmlVersion || "not found"}`);

            if (packageVersion === htmlVersion) {
                console.log("✅ Versions are synchronized");
                return true;
            } else {
                console.log("❌ Versions are NOT synchronized");
                return false;
            }
        } catch (error) {
            console.error(`❌ Check failed: ${error.message}`);
            return false;
        }
    }

    /**
     * Watch for changes and auto-sync
     */
    watch() {
        console.log("👀 Watching package.json for version changes...");
        console.log("Press Ctrl+C to stop watching");

        // Initial sync
        this.sync();

        // Watch for changes
        fs.watchFile(this.packageJsonPath, { interval: 1000 }, (curr, prev) => {
            if (curr.mtime !== prev.mtime) {
                console.log("\n📦 package.json changed, syncing version...");
                this.sync();
            }
        });

        // Handle graceful shutdown
        process.on("SIGINT", () => {
            console.log("\n👋 Stopping version watcher...");
            fs.unwatchFile(this.packageJsonPath);
            process.exit(0);
        });
    }
}

// CLI interface
function main() {
    const args = process.argv.slice(2);
    const command = args[0] || "sync";
    const versionSync = new VersionSync();

    switch (command) {
        case "sync":
            process.exit(versionSync.sync() ? 0 : 1);
            break;
        case "check":
            process.exit(versionSync.check() ? 0 : 1);
            break;
        case "watch":
            versionSync.watch();
            break;
        default:
            console.log("Usage: node version-sync.js [sync|check|watch]");
            console.log("  sync  - Synchronize HTML version with package.json (default)");
            console.log("  check - Check if versions are synchronized");
            console.log("  watch - Watch for changes and auto-sync");
            process.exit(1);
    }
}

// Run if executed directly
if (require.main === module) {
    main();
}

module.exports = VersionSync;
