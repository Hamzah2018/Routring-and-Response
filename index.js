const url = require('url');
const routing = require('./routing');
// console.log("Hamzah");

const http = require('http');
 
const server = http.createServer(routing);
server.listen(3000,'127.0.0.1',()=>{
    console.log('server runing...');
}
);


// console.log("Car");

