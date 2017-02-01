var ownmodule = require('ownmodule');
var test = ownmodule.msgs();
var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(test+'\n');
    res.end('<span style="color:red;">Program end</span>');
}).listen(8001);
console.log('open http://127.0.0.1:8001');