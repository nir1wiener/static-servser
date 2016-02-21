/**
 * Created by yoni and nir on 23/12/15.
 */
var net = require('net');
var hujiRequestParser = require('./hujirequestparser.js');
var hujiResponse = require('./hujiresponse.js');


/**
 * create a server and listen to a given port.
 * when we get  a request we parse it using hujirequestparser moudle
 * and then return and res with the given data.
 */
function createNewServer(port,rootFolder,host,callback){

    this.server = net.createServer(function (socket)
    {
        socket.setKeepAlive(true);
        var req = null;
        socket.on('data', function (data)
        {
            var reqError = "400";
            var reqFinish = 2;
            data = data.toString();
            try {
                //open a new request
                if (req ===  null)
                {
                    //get a new req and parse the data
                    req = hujiRequestParser.parse(data);

                }
                //if we are receving a new data to an existing request
                else if(req !== null)
                {
                    //add the data to the current req.
                    req = hujiRequestParser.parseData(req,data);
                }
            }
            catch (error)
            {

                var errorMess;
                //an browser error
                if(error = reqError) {
                    errorMess = "HTTP/1.1 400 Bad Request\r\n" + "Date: +" +
                        new Date().toUTCString() + "\r\n\r\n" +
                        "<h1>Bad Request</h1>";

                    socket.write(errorMess);
                //an server error
                }
                else
                {
                    errorMess = "HTTP/1.1 501 Server Error\r\n" + "Date: +" +
                        new Date().toUTCString() + "\r\n\r\n" +
                        "<h1>Server Error</h1>";

                    socket.write(errorMess);
                }
                socket.destroy();
                return;
            }

            //if the req is finish, create and send a res.
            if (req.status == reqFinish) {
                //get the response.
                hujiResponse.reqToRes(req, rootFolder, function
                    (httpResponseMessage, data, isFileExist, res, req) {

                    if (isFileExist) {

                        if(res.responseHeaders['Content-Type'] === "image/jpeg"
                            || res.responseHeaders['Content-Type'] ===
                            "image/gif")
                        {

                            socket.write(httpResponseMessage);
                            socket.write(data);
                        }

                        else
                        {
                            socket.write(httpResponseMessage);
                        }

                        if((req.connection === 'close') ||
                            (res.responseHeaders['Version'] === 'HTTP/1.0'
                            && req.connection != 'keep-alive'))
                        {
                            socket.end();
                        }
                    }
                    else
                    {
                        socket.write(httpResponseMessage);
                        socket.write("<h1>404 File not found</h1>");
                        socket.destroy();
                    }
                });
                req = null;
            }
        });
        socket.setTimeout(2000,function(){
            socket.destroy();
        })
    }).on('error',function(err){
        callback(err)
    });

    this.server.listen(port, host, function () {
        console.log("Server is open");
    });
    this.serverClose = function () {
        this.server.close();
    };
}

exports.createNewServer = createNewServer;
