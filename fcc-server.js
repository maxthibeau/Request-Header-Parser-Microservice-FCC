var express = require('express')
var app = express()
app.get('/', function(req, res){
    var ip = req.headers['x-forwarded-for']
    var lang = req.headers['accept-language'].split(',')[0]
    var software = req.headers['user-agent'].split('(')[1].split(')')[0]
    res.send(JSON.parse('{"ipaddress":"' + ip + '","language":"' + lang + '","software":"' + software +  '"}'))
})
app.listen(8080)