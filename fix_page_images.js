const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  /<div className="hero-visual">[\s\S]*?<div className="hero-badge">/,
  `<div className="hero-visual">
      <img src="/images/hero.png" alt="Cyberpunk Dancer" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
    </div>

    <div className="hero-badge">`
);

content = content.replace(
  /<div className="product-img-placeholder p1">[\s\S]*?<div className="product-tag new">/,
  `<div className="product-img-placeholder p1">
        <img src="/images/product_1.png" alt="Product 1" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag new">`
);

content = content.replace(
  /<div className="product-img-placeholder p2">[\s\S]*?<div className="product-tag custom">/,
  `<div className="product-img-placeholder p2">
        <img src="/images/product_2.png" alt="Product 2" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag custom">`
);

content = content.replace(
  /<div className="product-img-placeholder p3">[\s\S]*?<div className="product-tag sale">/,
  `<div className="product-img-placeholder p3">
        <img src="/images/product_3.png" alt="Product 3" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
        <div className="product-tag sale">`
);

fs.writeFileSync('src/app/page.tsx', content);
console.log('Fixed page images');
