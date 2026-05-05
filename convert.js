const fs = require('fs');

const htmlContent = fs.readFileSync('tectonic-landing.html', 'utf8');

// Extract styles
const styleMatch = htmlContent.match(/<style>([\s\S]*?)<\/style>/);
let cssContent = styleMatch ? styleMatch[1] : '';

// Extract body content
const bodyMatch = htmlContent.match(/<body>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Clean up body content for React
bodyContent = bodyContent
  .replace(/class=/g, 'className=')
  .replace(/for=/g, 'htmlFor=')
  .replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}')
  .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
  .replace(/<br>/g, '<br />')
  .replace(/<hr>/g, '<hr />')
  .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
  .replace(/style="([^"]*)"/g, (match, styleString) => {
    // Basic inline style to object converter - very simplistic but might work for simple styles
    const styles = styleString.split(';').filter(Boolean).map(s => {
      const [key, value] = s.split(':').map(str => str.trim());
      if(!key) return '';
      const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
      return `${camelKey}: "${value}"`;
    }).filter(Boolean).join(', ');
    return `style={{ ${styles} }}`;
  });

const pageTsx = `
import React from 'react';

export default function Home() {
  return (
    <>
      ${bodyContent}
    </>
  );
}
`;

fs.writeFileSync('src/app/globals.css', cssContent);
fs.writeFileSync('src/app/page.tsx', pageTsx);

console.log('Conversion complete!');
