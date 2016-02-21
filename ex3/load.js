/**
 * Created by yoni and nir on 23/12/15.
 */
var http = require('http');
var net = require('net');
var huji = require('./hujiwebserver');

var totalReqsNum = 200;

function load() {
    var curServer = huji.start(8888,"./",function(e){console.log(e)});
    var i;
    http.globalAgent.maxSockets = 200;
    for (i = 0; i < totalReqsNum ; i++)
    {
        multiRequests(i);
    }
    setTimeout(function ()
    {
        huji.stop( curServer,function(e)
        {e ? (console.log(e)) : (console.log('server is down'))});
    }, 2000);
}

function multiRequests(requestNumber) {
    var httpReq = {
        hostname: 'localhost',
        port: 8888,
        path: '/ex2/index.html',
        method: 'GET',
        headers : {Connection : 'keep-alive'}
    };
    http.get(httpReq , function(res) {
        res.on('data', function(e) {
            if (res.statusCode == 200)
            {
                console.log("Good response: " + res.statusCode +
                    " for request #: " + requestNumber);
            }
            else
            {
                console.log("Bad response: " + res.statusCode +
                    " for request #: " + requestNumber);
            }
        });
    }).on('error', function (e) {
        console.log("Got error for request #: " + requestNumber +
            " connectionType: "+ httpReq.headers['Connection'] +
            ". error: " + e);
    });
}
load();
