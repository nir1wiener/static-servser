/**
 * Created by yoni and nir on 23/12/15.
 */
var http = require('http');
var serverModule = require('./hujiwebserver');


///**
// * requesting a valid file
// */
//function goodTest() {
//
//    var validReq = {
//        host: "localhost",
//        port: 7789,
//        path: '/ex2/index.html',
//        method: "GET",
//        headers: {
//            'Connection': 'keep-alive'
//        }
//    };
//
//
//    http.get(validReq, function (response) {
//        response.on('data', function (data){
//
//            if (response.statusCode == 200) {
//                console.log('The request was valid');
//            }
//            else {
//                console.log('The test didn\'t worked ');
//            }
//        });
//        response.on('error', function (error) {
//            console.log('Error on configuration request');
//        });
//    });
//
//
//}
//
//
///**
// * requestin file that does not exist
// */
//function errorTest() {
//
//    var notValidReq = {
//        host: "localhost",
//        port: 7789,
//        path: '/ex2/dex.html',
//        method: "GET",
//        headers: {Connection: 'keep-alive'}
//    };
//
//    http.get(notValidReq, function (response) {
//        response.on('data', function (data) {
//            if (response.statusCode == 404) {
//                console.log('test worked as it should');
//            }
//            else {
//                console.log('test failed');
//            }
//        });
//        response.on('error', function (error) {
//            console.log('Error on configuration request')
//        });
//    });
//}

var curServer = serverModule.start(7789,"./",  function(e)
         {e ? (console.log(e)) : console.log('server is up.')});
//
//goodTest();
//errorTest();
//
//setTimeout(function(){
//    serverModule.stop(curServer,function(e)
//    {e ? (console.log(e)) : console.log('server is down')});
//}, 2000)
