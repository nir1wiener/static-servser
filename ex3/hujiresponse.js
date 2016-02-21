/**
 * Created by yoni and nir on 23/12/15.
 */
var fsMoudle = require("fs");
var pathMoudle = require('path');
var Enum = require('./enum');
var lineEnd = "\r\n";

/**
 * an constructor for an http res
 */
function httpResponse(req){
    this.responseHeaders = {
        'Version': req.version,
        'Content-Type': "",
        'Content-Length': "",
        'Date': new Date().toUTCString(),
        'Status': "",
        'Pathname': "." + req.url
    };
    //updating the contentType
    getAndCheckContentType(req,this.responseHeaders);
}

/**
 * check the file extenstion and update the Content-Type.
 */
function getAndCheckContentType(req,responseHeaders){

    var fileExtension = "";
    // get file extenstion if exsit
    if(req.url.lastIndexOf("/")>req.url.lastIndexOf("."))
    {
        responseHeaders['Content-Type'] = Enum.contentTypes.UNSEPURTED;
        responseHeaders['Status'] =  Enum.resStatus.STATUS_400;
        return;
    }
    else
    {
        fileExtension = req.url.substring(req.url.lastIndexOf(".") + 1 );
    }
    switch (fileExtension){

        case Enum.contentTypes.JS_HEADER:
            responseHeaders['Content-Type'] = Enum.contentTypes.JS;
            break;

        case Enum.contentTypes.TXT_HEADER:
            responseHeaders['Content-Type'] = Enum.contentTypes.TXT;
            break;

        case Enum.contentTypes.HTML_HEADER:
            responseHeaders['Content-Type'] = Enum.contentTypes.HTML;
            break;

        case Enum.contentTypes.CSS_HEADER:
            responseHeaders['Content-Type'] = Enum.contentTypes.CSS;
            break;

        case Enum.contentTypes.JPG_HEADER:
            responseHeaders['Content-Type'] = Enum.contentTypes.JPG;
            break;

        case Enum.contentTypes.JEPG_HEADER:
            responseHeaders['Content-Type'] = Enum.contentTypes.JPG;
            break;

        case Enum.contentTypes.GIF_HEADER:
            responseHeaders['Content-Type'] = Enum.contentTypes.GIF;
            break;

        default :
            responseHeaders['Content-Type'] = Enum.contentTypes.UNSEPURTED;
            responseHeaders['Status'] = Enum.resStatus.STATUS_401;
            break;
    }
}

/**
 * read the given file to a buffer.
 * and send the res.
 */
function readRequestedFile(res,rootFolder,callback,req){
    var fileContent;
    var isFileExist = false;
    var httpResponseMessage ;
    switch (res.responseHeaders['Content-Type']) {

        case Enum.contentTypes.HTML:
        case Enum.contentTypes.TXT:
        case Enum.contentTypes.CSS:
        case Enum.contentTypes.JS:
        case Enum.contentTypes.GIF:
        case Enum.contentTypes.JPG:

            var filePath = pathMoudle.join(rootFolder, res.responseHeaders
                ['Pathname']);
            fsMoudle.readFile(filePath, function (err, data) {
                if (err)
                {
                    res.responseHeaders['Status'] = Enum.resStatus.STATUS_404;
                }
                else
                {
                    fileContent = data;
                    isFileExist = true;
                    res.responseHeaders['Content-Length'] = data.length;
                    res.responseHeaders['Status'] = Enum.resStatus.STATUS_200;
                }
                httpResponseMessage = getResponseMessage(res,fileContent);
                callback(httpResponseMessage, data, isFileExist, res,req);
            });
            break;

        case -1:
            httpResponseMessage = getResponseMessage(res,fileContent);
            callback(httpResponseMessage, null ,isFileExist ,res,req);
            break;
    }
}
/**
 * build the res mes.
 */
function getResponseMessage(res, fileContent) {

    var response = res.responseHeaders['Version'] + " " +
        res.responseHeaders['Status'] +  lineEnd ;

    response += "Date: " + res.responseHeaders['Date'] + lineEnd;

    if (res.responseHeaders['Status'] === Enum.resStatus.STATUS_200)
    {

        response += "Content-Type: " + res.responseHeaders['Content-Type'] +
            lineEnd ;

        response += "Content-Length: " + res.responseHeaders['Content-Length']
            + lineEnd +lineEnd;

        if (res.responseHeaders['Content-Type'] != Enum.contentTypes.GIF &&
            res.responseHeaders['Content-Type'] != Enum.contentTypes.JPG)
        {
            response += fileContent.toString() + lineEnd ;
        }
    }
    else
    {
        response += lineEnd;
    }
    return response;
}

/*
 * return an http res.
 */
function requestToResponse(req,rootFolder,callBack){
    var res = new httpResponse(req);
    readRequestedFile(res,rootFolder,callBack,req);
}

exports.reqToRes = requestToResponse;