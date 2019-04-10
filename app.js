var http = require('http');
var fs=require('fs');

http.createServer(function (req, res) {


  let file='.'+req.url;
var today = new Date();
var fechayhora = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()+'-'+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  fs.readFile(file,'utf8',(err,data)=>{
    if(err){
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end(err.Error);
      
      fs.appendFile('log.txt', fechayhora + ' | ' + req.url + ' - status: 404\n' , (err) => {
        if (err) throw err;
      });
      

    } else {

        if (file == "log.txt"){
            res.writeHead(403, {'Content-Type': 'text/plain'});
            res.end(err.Error);
            fs.appendFile('log.txt', fechayhora + ' | ' + req.url + ' - status: 403\n' , (err) => {
                if (err) throw err;
            });

        }

        else {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(data);

      fs.appendFile('log.txt', fechayhora + ' | ' + req.url + ' - status: 200\n' , (err) => {
        if (err) throw err;
      });

    }


    }
  });
}).listen(8080);

console.log('VIIIIVEEEEEEEE');