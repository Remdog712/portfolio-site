const fs = require('fs');
const path = require('path');

const imagesFolder = path.join(__dirname, '../images/samplework');
const outputFile = path.join(__dirname, '../_data/image_metadata.json');

function imageToJson(imagesFolder) {
  const imageFiles = fs.readdirSync(imagesFolder);

  const imageData = imageFiles
  .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
  .map(file => ({
    filename: file,
    filepath: `images/samplework/${file}` // No leading slash
  }));
  
  fs.writeFileSync(outputFile, JSON.stringify(imageData, null, 2));
  console.log('Generated image metadata at:', outputFile);
}

imageToJson(imagesFolder);
