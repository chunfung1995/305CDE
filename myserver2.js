//MongoDB Constructor
var MongoClient = require('mongodb').MongoClient;
// Set up the connection to the local db
var dbUrl = "mongodb://localhost:27017/";

//Node Constructor
(function() 
 {
	var fs, http, qs, server, url;
	http = require('http');
	url = require('url');
	qs = require('querystring');
	fs = require('fs');
	
  //Login Status variable default is false
	var loginStatus = false, loginUser = "";
	
	server = http.createServer(function(req, res) 
	{
		var action, form, formData, msg, publicPath, urlData, stringMsg;
		urlData = url.parse(req.url, true);
		action = urlData.pathname;
		publicPath = __dirname + "\\public\\";
		console.log(req.url);
	
	
		
		  if(req.url === "/login.html")
			{
        sendFileContent(res, "login.html", "text/html");
			}
		  else if(req.url === "/favouritelistpage.html")
			{
        sendFileContent(res, "favouritelistpage.html", "text/html");
			}
        
			else if(req.url === "/index.html")
			{
        sendFileContent(res, "index.html", "text/html");
			}
      
      else if(req.url === "/about.html")
			{
        sendFileContent(res, "about.html", "text/html");
			}
      else if(req.url === "/post.html")
			{
        sendFileContent(res, "post.html", "text/html");
			}
      else if(req.url === "post2.html")
			{
        sendFileContent(res, "post2.html", "text/html");
			}
      else if(req.url === "/post3.html")
			{
        sendFileContent(res, "post3.html", "text/html");
			}
      else if(req.url === "/post4.html")
			{
        sendFileContent(res, "post4.html", "text/html");
			}
      else if(req.url === "/video.html")
			{
        sendFileContent(res, "video.html", "text/html");
			}
      else if(req.url === "/music.html")
			{
        sendFileContent(res, "music.html", "text/html");
			}
      else if(req.url === "/map.html")
			{
        sendFileContent(res, "map.html", "text/html");
			}
    
      else if(req.url === "/game.html")
			{
        sendFileContent(res, "game.html", "text/html");
			}
      
      else if(req.url === "/search.html")
			{
        sendFileContent(res, "search.html", "text/html");
			}
    
      //default page of the website
			else if(req.url === "/")
			{
        sendFileContent(res, "index.html", "text/html");
			}
      
			else if(/^\/[a-zA-Z0-9-._\/]*.js/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "text/javascript");
			}
			else if(/^\/[a-zA-Z0-9-._\/]*.css/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "text/css");
			}
      else if(/^\/[a-zA-Z0-9-._\/]*.jpg$/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "image/jpg");
			}
      else if(/^\/[a-zA-Z0-9-._\/]*.png/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "image/png");
			}
      else if(/^\/[a-zA-Z0-9-._\/]*.jpeg/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "image/jpeg");
			}
      else if(/^\/[a-zA-Z0-9-._\/]*.mp3/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "audio/mp3");
			}
      else if(/^\/[a-zA-Z0-9-._\/]*.otf/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "application/font-otf");
			}
      else if(/^\/[a-zA-Z0-9-._\/]*.eot/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "application/vnd.ms-fontobject");
			}
      else if(/^\/[a-zA-Z0-9-._\/]*.woff/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "application/font-woff");
			}
      else if(/^\/[a-zA-Z0-9-._\/]*.woff2/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "application/font-woff2");
			}
      else if(/^\/[a-zA-Z0-9-._\/]*.woff/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "Buffer/Uint8Array");
			}
      else if(/^\/[a-zA-Z0-9-._\/]*.woff2/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "Buffer/Uint8Array");
			}
      else if(/^\/[a-zA-Z0-9-._\/]*.ttf/.test(req.url.toString()))
			{
				sendFileContent(res, req.url.toString().substring(1), "application/font-ttf");
			}
     
    
   
			else
			{  
				console.log("Requested URL is: " + req.url);
				res.end();
			}
  })

		
  
  //Server default listen port
	server.listen(8088);
  
  //Console shows the server running successful 
	console.log("Server is running Now!Time is" + new Date());


	function sendFileContent(response, fileName, contentType)
	{
		fs.readFile(fileName, function(err, data)
		{
			if(err)
			{
				response.writeHead(404);
				response.write("404 Not Found!");
         
			}
			else
			{
				response.writeHead(200, {'Content-Type': contentType});
				response.write(data);
			}
			response.end();
		});
	}
 }).call(this);
