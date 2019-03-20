app.use(function(req,res){
    res.writeHeade(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello express</h1>');
});