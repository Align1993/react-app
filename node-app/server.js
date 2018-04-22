var express = require('express'),
    app = express();
var template = require('express-art-template');
   
    app.engine('.html', template);
    app.set('view engine', 'html')
    app.set('views', __dirname + '/views');
    app.set('views options', {
        debug: process.env.NODE_ENV !== 'production'
    });

    var requestList = [
        {router: '/', path: "/index/index.js"}
    ]

    requestList.forEach(function (item) {
        var actionReq =  require('./action' + item.path);
        app.get(item.router, function(req, res, next) {
            actionReq(req, res, next)
        })

    })

    app.listen(8388);
    console.log(8388)