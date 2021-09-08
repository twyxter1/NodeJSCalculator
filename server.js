const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

app.post('/', function(req, res) {
    console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1+num2;
    res.send(`${num1} + ${num2} = ${result}`);
 });

app.listen(3000, function(){
    console.log("server is running on port 3000" );
});