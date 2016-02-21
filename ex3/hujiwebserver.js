var dynamicserver = require('./hujidynamicserver.js');
var hujiparser = require('./hujiparser.js');

var server;

function start(port, callback){
   
    server = new dynamicserver.DynamicServer(port, callback);
}
 
function stop(){
    
    server.stop();
}


// this the handler of a static request.
function static(rootFolder) {
    var handler = function(req, res, next) {
        res.checkExt(req);
        res.isStatic = true;
        hujiparser.stringify(res, rootFolder, function(resStr) {
            if ((req.headers['Connection'] === 'close') || (res.headers['Version'] === 'HTTP/1.0' && req.headers['Connection'] != 'keep-alive')){
                res.isClose = true;
            }
            res.send(resStr);
        });
    };
    return handler;
}