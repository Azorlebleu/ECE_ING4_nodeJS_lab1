// Import modules for further utilisation
const http = require('http')
const handles = require('./func')


// Write a response header



// Start the server using the serverHandle function
http.createServer(handles.serverHandle).listen(8080);


