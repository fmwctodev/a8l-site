const fs = require('fs');
const path = require('path');

// Optimize the built index.html for better performance
function optimizeBuild() {
  try {
    const indexPath = path.join(__dirname, '../dist/index.html');
    
    if (!fs.existsSync(indexPath)) {
      console.log('index.html not found in dist folder');
      return;
    }

    let html = fs.readFileSync(indexPath, 'utf8');

    // Preload critical CSS with proper fallback
    html = html.replace(
      /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
      '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'" crossorigin><noscript><link rel="stylesheet" href="$1" crossorigin></noscript>'
    );

    // Defer main JavaScript bundle
    html = html.replace(
      /<script type="module" crossorigin src="([^"]+\.js)"><\/script>/g,
      '<script type="module" src="$1" defer></script>'
    );

    // Defer service worker registration if present
    html = html.replace(
      /<script type="module" src="([^"]*registerSW[^"]*\.js)"><\/script>/g,
      '<script type="module" src="$1" defer></script>'
    );

    // Add resource hints for critical third-party domains
    const resourceHints = `
    <link rel="dns-prefetch" href="//prod.spline.design">
    <link rel="dns-prefetch" href="//www.googletagmanager.com">
  `;

    html = html.replace('</head>', `${resourceHints}</head>`);

    fs.writeFileSync(indexPath, html);
    console.log('Build optimization completed successfully');
  } catch (error) {
    console.error('Error during build optimization:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

// Run optimization if called directly
if (require.main === module) {
  optimizeBuild();
}

module.exports = optimizeBuild;