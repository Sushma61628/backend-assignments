const express=require('express');
var api=express();

api.get('/',function(request,response){
    response.send('I am default root');
});

api.get('/user',function(request,response){
    const username=request.query.username;
    response.send(`welcome,${username}!`);
});

api.listen(7000,function(){
    console.log('api server started')
})