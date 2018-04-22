var http = require('http'),
    request = require('../../widget/request/request.js'),
    domain = require('../domain.js')
    requestList = [
      {
          id: 'news',
          url: domain + '/news'
      }
    ];

    module.exports = function(req, res, next) {
        var datas = [],
            arr = [];

        arr[arr.length] = new Promise(function(resolve) {
            request('../../api/getJson.json?type=0', req.headers, function(data) {
               console.log(data)
                resolve()
            })
        })

        // requestList.forEach(item => {
        //     arr[arr.length] = new Promise(function(resolve) {
        //         request(item.url, req.headers, function(json, err) {
        //             datas[item.id] = json;
        //             resolve()
        //         })
        //     })
        // });
        // Promise.all(arr)
            //    .then(function(data) {
            //        res.render('index.html', datas);
            //    })   
            res.render('index.html', {name: 'coco'}); 
            // res.sendfile('filepath')
    }