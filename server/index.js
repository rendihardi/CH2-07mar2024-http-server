//core
const http = require("http");
const fs = require("fs");
const path = require("path");

//third party
const url = require("url");

const PUBLIC_DIRECTORY = path.join(__dirname, "../public");
const PORT = 8000;

const server = (req, res) => {
  //localhost 8000
  if (req.url === "/") {
    res.end("INI HALAMAN DEFAULT");
  }
  //localhost 8000/search
  else if (req.url === "/search") {
    res.end("INI SEARCH");
  } else {
    res.end("Halaman Yang Tak Ada");
  }
};

http.createServer(server).listen(PORT);
console.log(`Server is running on PORT: localhost ${PORT}`);
