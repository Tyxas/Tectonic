const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace Product 4 SVG
content = content.replace(
  /<div className="product-img-placeholder p4">[\s\S]*?<div className="product-tag new">/m,
  `<div className="product-img-placeholder p4">
        <img src="/images/product_4.png" alt="Product 4" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag new">`
);

// Replace Product 5 SVG
content = content.replace(
  /<div className="product-img-placeholder p5">\s*<svg[\s\S]*?<\/svg>\s*<\/div>/m,
  `<div className="product-img-placeholder p5">
        <img src="/images/product_5.png" alt="Product 5" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
      </div>`
);

// Replace Product 6 SVG
content = content.replace(
  /<div className="product-img-placeholder p6">[\s\S]*?<div className="product-tag custom">/m,
  `<div className="product-img-placeholder p6">
        <img src="/images/product_6.png" alt="Product 6" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag custom">`
);

// Replace Custom Section Visual correctly
content = content.replace(
  /<div className="custom-visual">\s*<div className="custom-grid-art">[\s\S]*?<div className="custom-center">/m,
  `<div className="custom-visual">
    <div className="custom-grid-art" style={{ opacity: 1, background: 'transparent' }}>
      <img src="/images/custom.png" alt="Custom Tailoring" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
    </div>
    <div className="custom-center">`
);

// Adjust custom-center to look good over the image
content = content.replace(
  /<div className="custom-circle">/m,
  `<div className="custom-circle" style={{ borderColor: 'transparent', background: 'rgba(0,0,0,0.6)', borderRadius: '50%' }}>`
);

content = content.replace(
  /<div className="custom-circle-text">/m,
  `<div className="custom-circle-text" style={{ color: '#fff' }}>`
);

content = content.replace(
  /<div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555" }}>/m,
  `<div style={{ fontFamily: "'Space Mono',monospace", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", background: 'rgba(0,0,0,0.6)', padding: '6px 12px', display: 'inline-block' }}>`
);

fs.writeFileSync('src/app/page.tsx', content);
console.log('Fixed page images correctly');
