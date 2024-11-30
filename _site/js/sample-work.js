const fs = require('fs');
const path = require('path');

// Define the directory containing your images
const imagesFolder = path.join(__dirname, '../images/samplework');

// Output JSON file path
const outputFile = path.join(__dirname, '../_data/image_metadata.json');

// Function to read images and generate JSON
function imageToJson(imagesFolder) {
  const imageFiles = fs.readdirSync(imagesFolder);

  const imageData = imageFiles
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map(file => ({
      filename: file,
      filepath: `/images/samplework/${file}`,
    }));

  // Ensure the _data directory exists
  const dataDir = path.join(__dirname, '../_data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }

  fs.writeFileSync(outputFile, JSON.stringify(imageData, null, 2));
  console.log('Generated image metadata at:', outputFile);
}

imageToJson(imagesFolder);
