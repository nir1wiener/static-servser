//enum that hold all the valid contentTypes
var contentTypes = {

    JS : 'application/javascript',
    TXT : 'text/plain' ,
    HTML : 'text/html',
    CSS : 'text/css' ,
    JPG : 'image/jpeg' ,
    GIF : 'image/gif' ,
    UNSEPURTED : -1,
    JS_HEADER : 'js',
    TXT_HEADER : 'txt' ,
    HTML_HEADER : 'html',
    CSS_HEADER : 'css' ,
    JEPG_HEADER : 'jpeg' ,
    JPG_HEADER : 'jpg',
    GIF_HEADER : 'gif' ,

};

//enum that hold all the response Status
var resStatus = {

    STATUS_200 : "200 OK",
    STATUS_404 : "404 Not Found",
    STATUS_401 : "401 Unauthorized ",
    STATUS_400 : "400 Bad request",
}


exports.contentTypes = contentTypes;
exports.resStatus = resStatus;