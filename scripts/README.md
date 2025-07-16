# Version Synchronization Scripts

This directory contains scripts to automatically synchronize the version number between `package.json` and `public/index.html`.

## Available Scripts

### 1. Basic Version Update (`update-version.js`)

Simple script that reads the version from `package.json` and updates the version meta tag in `public/index.html`.

```bash
npm run update-version
```

### 2. Version Watcher (`watch-version.js`)

Watches `package.json` for changes and automatically updates the HTML version when the package version changes.

```bash
npm run watch-version
```

### 3. Comprehensive Version Sync (`version-sync.js`)

Advanced script with multiple commands:

#### Sync versions (default)

```bash
npm run version-sync
# or
node scripts/version-sync.js sync
```

#### Check if versions are synchronized

```bash
npm run version-check
# or
node scripts/version-sync.js check
```

#### Watch for changes and auto-sync

```bash
npm run version-watch
# or
node scripts/version-sync.js watch
```

## Automatic Integration

The `prebuild` script is configured to automatically run `update-version` before each build:

```bash
npm run build  # This will automatically sync versions before building
```

## How It Works

1. **Version Detection**: Scripts read the `version` field from `package.json`
2. **HTML Update**: They find and update the `<meta name="version" content="..." />` tag in `public/index.html`
3. **Validation**: Scripts verify that the update was successful

## Usage Examples

### Manual Version Update

1. Change version in `package.json`
2. Run `npm run version-sync`

### Automatic Watching

1. Run `npm run version-watch`
2. Edit version in `package.json`
3. The HTML file will be updated automatically

### Build Integration

Just run `npm run build` - the version will be synchronized automatically before building.

## Error Handling

All scripts include comprehensive error handling:

-   ✅ Success messages with version numbers
-   ❌ Clear error messages for common issues
-   🔄 Status indicators for ongoing operations
-   👀 Visual feedback for file watching

## File Structure

```
scripts/
├── update-version.js    # Basic version update
├── watch-version.js     # File watcher
├── version-sync.js      # Comprehensive sync tool
└── README.md           # This documentation
```
