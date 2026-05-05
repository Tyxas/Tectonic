const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const replacements = {
  'stroke-dasharray': 'strokeDasharray',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'letter-spacing': 'letterSpacing',
  'font-weight': 'fontWeight',
  'text-anchor': 'textAnchor',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit'
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key + '=', 'gi');
  content = content.replace(regex, value + '=');
}

fs.writeFileSync('src/app/page.tsx', content);
console.log('Fixed SVG attributes');
