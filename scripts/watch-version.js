#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const updateVersionInHtml = require("./update-version");

/**
 * Watches package.json for changes and automatically updates version in index.html
 */
function watchVersionChanges() {
    const packageJsonPath = path.join(__dirname, "..", "package.json");

    console.log("👀 Watching package.json for version changes...");
    console.log("Press Ctrl+C to stop watching");

    // Initial update
    updateVersionInHtml();

    // Watch for changes
    fs.watchFile(packageJsonPath, { interval: 1000 }, (curr, prev) => {
        if (curr.mtime !== prev.mtime) {
            console.log("\n📦 package.json changed, checking version...");

            try {
                const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
                console.log(`🔄 Detected version: ${packageJson.version}`);
                updateVersionInHtml();
            } catch (error) {
                console.error("❌ Error reading package.json:", error.message);
            }
        }
    });

    // Handle graceful shutdown
    process.on("SIGINT", () => {
        console.log("\n👋 Stopping version watcher...");
        fs.unwatchFile(packageJsonPath);
        process.exit(0);
    });
}

// Run the watcher if this script is executed directly
if (require.main === module) {
    watchVersionChanges();
}

module.exports = watchVersionChanges;
