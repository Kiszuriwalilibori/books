#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Updates the version number in public/index.html to match the version in package.json
 */
function updateVersionInHtml() {
    try {
        // Read package.json
        const packageJsonPath = path.join(__dirname, "..", "package.json");
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
        const version = packageJson.version;

        if (!version) {
            console.error("❌ No version found in package.json");
            process.exit(1);
        }

        // Read index.html
        const indexHtmlPath = path.join(__dirname, "..", "public", "index.html");
        let htmlContent = fs.readFileSync(indexHtmlPath, "utf8");

        // Update version meta tag
        const versionMetaRegex = /<meta\s+name="version"\s+content="[^"]*"\s*\/>/;
        const newVersionMeta = `<meta name="version" content="${version}" />`;

        if (versionMetaRegex.test(htmlContent)) {
            htmlContent = htmlContent.replace(versionMetaRegex, newVersionMeta);
            console.log(`✅ Updated version in index.html to ${version}`);
        } else {
            console.error("❌ Version meta tag not found in index.html");
            process.exit(1);
        }

        // Write updated content back to index.html
        fs.writeFileSync(indexHtmlPath, htmlContent, "utf8");
        console.log("✅ Version update completed successfully");
    } catch (error) {
        console.error("❌ Error updating version:", error.message);
        process.exit(1);
    }
}

// Run the update if this script is executed directly
if (require.main === module) {
    updateVersionInHtml();
}

module.exports = updateVersionInHtml;
