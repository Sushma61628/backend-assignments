const express=require('express');
var api=express();

api.get('/',function(request,response){
    response.send('I am default root');
});

api.get('/greet/:name',function(request,response){
    const name=request.params.name;
    response.send(`Hello,${name}!`);
});

api.listen(7000,function(){
    console.log('api server started')
})