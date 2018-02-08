//this is client wich send JSON over HTTPS connection ( established in previous script) 
var querystring=require('querystring'),
https=require('https');

//POST data to be sent to server
var data=querystring.stringify(
{
	'message':'MY secure JSON string'
});

//POST options
var PostOptions=
{
	hostname:'localhost',
	port:3000,
	path:'/',
	rejectUnauthorize:false,
	method:'POST'
	headers:
	{
		'Content-Type':'application/www-url.encoded',
		'Content-Length':data.length,
		
	}
	
	
	
};

//set up HTTPS post request to server
var postReq=https.request(PostOptions,function(res)
{
	res.setEnconding('utf8'),
	res.on('data'function(data)
	{
		console.log(data)
	});
	
});

//POST data to server
postReq.write(data);
postReq.end();


