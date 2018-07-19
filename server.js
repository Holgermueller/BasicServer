const HTTP = require('http');
const PORT = 8080;

function handleRequest(request, response) {
    response.end('It works!! Path Hit: ' + request.url);
}

const SERVER = HTTP.createServer(handleRequest);

SERVER.listen(PORT, () => {
    console.log('Server listening on: http://localhost: ' + PORT);
});