/**
 * Created by yoni and nir on 23/12/15.
 */




var lineSpace = "\r";
var lineEnd = "\n";


/**
 * an constructor for an http req
 */
function httpRequest(){

    this.methodType = "GET";
    this.url = "";
    this.version = "";
    this.connection = "";
    this.requestData = "";
    this.contentLength = 0;
    this.status = 0;
    this.reqHasBody = false;
    this.indexOfRequestData = 0;

}

/**
 * parse the givem data to an http req.
 */
function parse(data){

    //get a new http request
    var req = new httpRequest();
    //get all the data into the req
    req = parseData(req , data);
    return req;

}
/*
 * parse the data into the given req
 */
function parseData(req,data){

    var reqInProgrees = 0;
    var finishRecHeaders = 1;
    var reqFinish = 2;

    if (req.status === reqInProgrees){

        var i = req.indexOfRequestData;
        req.requestData += data;

        for (; i < req.requestData.length - 3; i++)
        {

            if(req.requestData[i] === lineSpace && req.requestData[i + 1] === lineEnd &&
                req.requestData[i + 2] === lineSpace &&
                req.requestData[i + 3] === lineEnd)
            {

                req.indexOfRequestData = i + 4;
                req.status = finishRecHeaders;
                try
                {
                    helpParser(req);
                }
                catch (error)
                {
                    throw error;
                }
                req.requestData = req.requestData.slice(req.indexOfRequestData);
                if (!req.reqHasBody) {
                    req.status = reqFinish;
                }
                break;

            }
        }

        if (req.status === reqInProgrees) {
            req.indexOfRequestData = i + 4;
        }
        else if (req.status === finishRecHeaders) {

            if (req.contentLength === req.requestData.length) {
                req.status = reqFinish;
            }

        }
    }
    else if (req.status === finishRecHeaders) {

        req.requestData += data;
        if (req.contentLength === req.requestData.length) {
            req.status = reqFinish;
        }
    }
    return req;

}

function checkQuestionMarkInUrl(url) {

    var indexOfQuestionMark = url.indexOf("?");
    if (indexOfQuestionMark === -1) {
        return url;
    }
    else {
        return url.substring(0, indexOfQuestionMark);
    }
}

/**
 * check if the request is valid and get the  contentLength ,connection headers.
 */
function helpParser(req){

    var serverError = "500";

    var httpDataLines = req.requestData.split(lineSpace+lineEnd);
    var getLineRegex = /(GET)\s\S+\sHTTP\/(1.1|1.0)\s*\r/;

    var getLineArray = httpDataLines[0].split(" ");
    if(getLineArray[0] !== "GET"){
        throw serverError;
    }

    if(!getLineRegex.test(httpDataLines[0]+lineSpace)){
        throw reqError;
    }
    req.url = checkQuestionMarkInUrl(getLineArray[1]);
    req.version = getLineArray[2];
    var index = 1 ;

    for(; index < httpDataLines.length;index++)
    {
        if(httpDataLines[index].substring(0,httpDataLines[index].indexOf(":"))
            === "Connection")
        {
            req.connection = httpDataLines[index].substring
            (httpDataLines[index].indexOf(":") + 2);

        }
        if(httpDataLines[index].substring(0,httpDataLines[index].indexOf(":"))
            === "Content-Length")
        {
            req.reqHasBody = true;
            req.contentLength = httpDataLines[index].substring
            (httpDataLines[index].indexOf(":") + 2);

        }


    }
}

exports.parse = parse;
exports.parseData = parseData;