const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);


const getPage2 = (request, response) => {
  response.writeHead(300, {
    'Content-Type': 'text/html',
  }); // mime type: video/mp4 text/plain etc
  response.write(page2);
  response.end();
};

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
