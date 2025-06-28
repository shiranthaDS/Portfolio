const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 32x32 canvas
const canvas = createCanvas(32, 32);
const ctx = canvas.getContext('2d');

// Draw background (blue)
ctx.fillStyle = '#2563eb';
ctx.fillRect(0, 0, 32, 32);

// Draw rounded corners effect
ctx.globalCompositeOperation = 'destination-in';
ctx.beginPath();
ctx.roundRect(0, 0, 32, 32, 4);
ctx.fill();
ctx.globalCompositeOperation = 'source-over';

// Draw text "SD"
ctx.fillStyle = 'white';
ctx.font = 'bold 14px sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('SD', 16, 16);

// Save as PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./favicon-32x32.png', buffer);

console.log('Favicon generated successfully!');
