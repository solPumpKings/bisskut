# Extension File Placeholder

This folder contains the AsterDrop browser extension file.

## For Development:
Place your `ext.zip` file in this directory for local testing.

## For Production Deployment:
Since GitHub has file size limits, consider these options for hosting the extension file:

### Option 1: GitHub Releases
Upload the extension as a release asset:
1. Go to your GitHub repository
2. Create a new release
3. Attach the `ext.zip` file
4. Update the download URL in the code

### Option 2: External Hosting
Host the file on:
- AWS S3
- Google Cloud Storage
- DigitalOcean Spaces
- Any CDN service

### Option 3: Split the Extension
If the extension is too large, consider:
- Splitting into multiple smaller files
- Using dynamic loading
- Hosting assets separately

## Current Configuration:
- File expected: `ext.zip`
- Download URL: `/downloads/ext.zip`
- File size limit: ~25MB for GitHub

## Note:
The extension file is excluded from git commits via `.gitignore` to prevent upload issues.