const fs = require('fs');
const path = require('path');

const images = [
  'public/new/5.jpeg',
  'public/new/6.jpeg',
  'public/new/8.jpeg',
  'public/img/jelly/pdf.png'
];

images.forEach(img => {
  try {
    const buffer = fs.readFileSync(img);
    // Simple JPEG/PNG parser for dimensions
    if (img.endsWith('.jpeg') || img.endsWith('.jpg')) {
      // Find SOF marker
      let i = 0;
      while (i < buffer.length) {
        if (buffer[i] === 0xFF && (buffer[i+1] >= 0xC0 && buffer[i+1] <= 0xC3)) {
          const h = buffer[i+5] * 256 + buffer[i+6];
          const w = buffer[i+7] * 256 + buffer[i+8];
          console.log(`${img}: ${w}x${h}`);
          break;
        }
        i++;
      }
    } else if (img.endsWith('.png')) {
      const w = buffer.readUInt32BE(16);
      const h = buffer.readUInt32BE(20);
      console.log(`${img}: ${w}x${h}`);
    }
  } catch (e) {
    console.log(`Error reading ${img}: ${e.message}`);
  }
});
