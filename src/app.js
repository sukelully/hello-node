const createServer = require('./helloNode.js');
const { writeFile, appendFile } = require('./writeFile.js');
const { readFile } = require('./readFile.js');
const { fileUrl, outputFilePath, downloadFile, readFileAsync } = require('./streamReadFile.js');

// createServer('localhost', 4000);
// writeFile();
// appendFile();
// readFile();
try {
  await downloadFile(fileUrl, outputFilePath);
  await readFileAsync(outputFilePath);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
