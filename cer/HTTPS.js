//how to establish HTTPS connection based on keys and 
//self-signed certifciates  between Express server and program or browser's  running locally to transpot JSON savely

var fs=require('fs'),
https=require('https'),
queryString=require('querystring'),
bodyParser=require('body-parser'),
app=require('express')();

//support JSON and URL encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	
	extended:true
}));


//handle all post request
app.post('/', function(req,res)
{
	
	var message=req.body,
	res.send('Message received' + queryString.stringify(message))
});


//set certificates options to create secure connection
var options={
	key:fs.readFileSync('server.key'),
	cert:fs.readFileSync('server.crt'),
	passphrase:'Your key password'
	
};

//create server with certifciates options
https.createServer(option,app).listen(3000,function()
{
	console.log('Server started, Listening on port 3000')
	
	
});














