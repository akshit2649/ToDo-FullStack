const http = require("http");

const PORT = 5000;
const server = http.createServer((request, response) => {
  response.end("SUP!");
});

server.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`);
});
