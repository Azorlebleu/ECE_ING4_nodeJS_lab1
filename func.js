module.exports = {
   
    serverHandle: function (req, res) {
        url =require('url');
        qs = require('querystring');
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        if (path ==='/'){
            res.write('Go to /hello?name="YOURNAME".')
        }
        else if (path ==='/hello' && params.name=='Pierre')
        {
            res.write('I am Pierre');
        }
        else if (path ==='/hello' && params.name=='Robinson')
        {
            res.write('I am Robinson');
        }
        else if (path === '/hello' && 'name' in params) {
            res.write('Hello ' + params['name'])
        } 
        
        else {
            res.write('<h1>404 ERROR</h1>')
        }
        
        
        res.end();
        }
  }