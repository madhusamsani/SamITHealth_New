# SamITHealth Website

SamITHealth provides Healthcare IT, software delivery, consultancy, RCM and lab services with measurable outcomes.

## About

This is the main website for SamITHealth, showcasing our services including:
- IT Software & Consultancy
- Provider Services (RCM)
- Payer Solutions
- Laboratory Services

## Deploying to Propelly

This static website can be deployed to Propelly using the included `propelly.yaml` configuration file.

### Prerequisites
- A Propelly account
- Propelly CLI installed (if deploying via command line)

### Deployment Steps

1. **Using Propelly CLI:**
   ```bash
   propelly deploy
   ```
   The CLI will automatically detect and use the `propelly.yaml` configuration.

2. **Using Propelly Dashboard:**
   - Connect your repository to Propelly
   - Propelly will automatically detect the `propelly.yaml` configuration
   - The site will be built and deployed from the repository root

### Configuration Details

The `propelly.yaml` file specifies:
- **Build:** No build step required (static site)
- **Publish Directory:** `./ ` (repository root)
- **Version:** 1.0

All HTML, CSS, JavaScript, and asset files are served directly from the repository root.

### Manual Testing Checklist

After deployment, verify:
- [ ] Homepage loads correctly on desktop and mobile
- [ ] Mobile navigation menu opens and closes properly
- [ ] All navigation links work
- [ ] Contact and CTA buttons navigate to correct pages
- [ ] Subscribe form displays alert message
- [ ] Images and assets load correctly
- [ ] Footer social media links work

## Local Development

Since this is a static site, you can open `index.html` directly in a browser or use a simple HTTP server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js http-server
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## License

© 2025 SamITHealth. All rights reserved.
