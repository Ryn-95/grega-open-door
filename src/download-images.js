import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageUrls = {
  'property1.jpg': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  'property2.jpg': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
  'property3.jpg': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
  'property4.jpg': 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80',
  'hero-properties.jpg': 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
  'location.jpg': 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
  'social.jpg': 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80'
};

const downloadImage = (url, filename) => {
  const filepath = path.join(__dirname, '../public/images', filename);
  const file = fs.createWriteStream(filepath);

  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filepath);
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Download all images
Object.entries(imageUrls).forEach(([filename, url]) => {
  downloadImage(url, filename);
}); 