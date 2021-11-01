const http = require('http');
const fs = require('fs');
const port = 4321;

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    // haziFeladatRouterem
    switch (true) {
        case req.url === "/" && req.method === "GET":
            fs.readFile('fej.html', 'utf-8', (err, data) => {
                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.end(data);
            });
            break;
        case req.url === "/alap.css" && req.method === "GET":
            fs.readFile('alap.css', 'utf-8', (err, data) => {
                res.setHeader('Content-Type', 'text/css');
                res.writeHead(200);
                res.end(data);
            });
            break;
        case req.url === "/futas.jpg" && req.method === "GET":
            fs.readFile('futas.jpg', (err, data) => {
                res.setHeader('Content-Type', 'image/jpeg');
                res.writeHead(200);
                res.end(data);
            });
            break;
        case req.url === "/alap.css" && req.method === "GET":
            fs.readFile('alap2.css', 'utf-8', (err,data) => {
                res.setHeader('Content-Type', 'text/css');
                res.writeHead(200);
                res.end(data);
            });
            break;
            default:
                fs.readFile('iras.html', 'utf-8', (err,data) => {
                    res.setHeader('Content-Type', 'text/html');
                    res.writeHead(200);
                    res.end(data);
                });


    }
});
server.listen(port);