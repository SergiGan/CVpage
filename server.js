const express = require('express');
const host = 'localhost'
//front-end server
const ang = express();
const port2 = 4201;
ang.listen(port2, host, function () {
  console.log(`Server2 listens http://${host}:${port2}`);
});
ang.use(express.static(__dirname + "/dist/CVpage"));
ang.use("/", function(request, response){
  response.sendFile(path.join(__dirname+'/dist/CVpage/index.html')); 
});