const http = require('http');

const hostname = '127.0.0.1';
const port = 7000;

const server = http.createServer((req, res) => {
    console.log(req.url);
  if(req.url=='/h'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    res.end('Hello World');
  }
  else{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.status(401).send('Status: Unauthorized')

        res.end('Hello ');  
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


