#!/usr/bin/env node

const http = require('http');
const express = require('express');

function createServer(hostname = '127.0.0.1', port = 3000) {
  // Create HTTP server and listen on port 3000 for requests
  const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
  });

  // Listen for request on port 3000, and as a callback function have the port listen on logged
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  return server;
}

function expressServer() {
  const app = express();

  app.get('/', (req, res) => res.send('Hello World!'));
  console.log('listening');
  app.listen(8080);
}

module.exports = { createServer, expressServer };
