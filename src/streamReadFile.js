import fs from 'fs';
import { pipeline } from 'node:stream/promises';
import path from 'path';

const fileUrl = 'https://www.gutenberg.org/files/2701/2701-0.txt';
const outputFilePath = path.join(process.cwd(), 'moby.md');

async function downloadFile(url, outputPath) {
    const response = await fetch(url);

    if (!response.ok || !response.body) {
        throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);

        const fileStream = fs.createWriteStream(outputPath);
        console.log(`Downloading file from ${url} to ${outputFilePath}`);

        await pipeline(response.body, fileStream);
        console.log('File downloaded successfully');
    }
}

async function readFile(filePath) {
    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    try {
        for await (const chunk of readStream) {
            console.log('--- File chunk start');
            console.log(chunk);
            console.log('--- File chunk end');
        }
        console.log('Finished');
    } catch (error) {
        console.error(`Error reading file ${error.message}`);
    }
}

try {
    await downloadFile(fileUrl, outputFilePath);
    await readFile(outputFilePath);
} catch (error) {
    console.error(`Error: ${error.message}`);
}