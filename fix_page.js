const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Add use client
if (!content.includes('"use client"')) {
  content = '"use client";\nimport { useEffect } from "react";\n' + content;
}

// Remove scripts
content = content.replace(/<script>([\s\S]*?)<\/script>/g, '');

const scriptContent = `
  useEffect(() => {
    const nav = document.querySelector('nav');
    if(nav) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
          nav.style.borderBottomColor = '#2A2A2A';
        } else {
          nav.style.borderBottomColor = '#1E1E1E';
        }
      });
    }

    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const img = card.querySelector('.product-img-placeholder svg');
        if (img) {
          img.style.transform = \`translate(\${x * 10}px, \${y * 10}px)\`;
        }
      });
      card.addEventListener('mouseleave', () => {
        const img = card.querySelector('.product-img-placeholder svg');
        if (img) img.style.transform = '';
      });
    });
  }, []);
`;

if (!content.includes('useEffect(() => {')) {
  content = content.replace('return (', scriptContent + '\n  return (');
}

// Ensure the HTML syntax is completely valid JSX
// Things like `viewBox="0 0 24 24"` are fine, but `stroke-width` needs to be `strokeWidth`
content = content.replace(/stroke-width/g, 'strokeWidth');
content = content.replace(/stroke-linecap/g, 'strokeLinecap');
content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');

fs.writeFileSync('src/app/page.tsx', content);
console.log('Fixed page.tsx');
