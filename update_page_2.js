const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  /<div className="product-img-placeholder p4">[\s\S]*?<div className="product-tag new">/,
  `<div className="product-img-placeholder p4">
        <img src="/images/product_4.png" alt="Product 4" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag new">`
);

content = content.replace(
  /<div className="product-img-placeholder p5">[\s\S]*?<\/div>\s*<div className="product-info">/,
  `<div className="product-img-placeholder p5">
        <img src="/images/product_5.png" alt="Product 5" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
      </div>
      <div className="product-info">`
);

content = content.replace(
  /<div className="product-img-placeholder p6">[\s\S]*?<div className="product-tag custom">/,
  `<div className="product-img-placeholder p6">
        <img src="/images/product_6.png" alt="Product 6" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag custom">`
);

content = content.replace(
  /<div className="custom-grid-art">[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/,
  `<div className="custom-grid-art" style={{ opacity: 1, background: 'transparent' }}>
      <img src="/images/custom.png" alt="Custom Tailoring" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
    </div>`
);

fs.writeFileSync('src/app/page.tsx', content);
console.log('Fixed more page images');
