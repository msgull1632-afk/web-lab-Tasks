const http = require('http');

// Create server
const server = http.createServer((req, res) => {

  // Send status code and content type
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  // Send response
  res.end('Hello, World!');
});

// Port number
const PORT = 3000;

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});