const http = require('http');
const fs = require('fs');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const onRequest = (request, response) => {
    console.log(request.url);
    response.writeHead(300, {
        'Content-Type': 'text/html'
    }); //mime type: video/mp4 text/plain etc
    response.write(index);
    response.end();
};

http.createServer(onRequest).listen(port);
console.log(`Listening on 127.0.0.1${port}`);
