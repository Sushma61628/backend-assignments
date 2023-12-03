const express=require('express');
var api=express();

api.get('/',function(request,response){
    response.send('I am default root');
});

api.get('/user',function(request,response){
    const username=request.query.username;
    const password=request.query.password;
    response.send(`welcome,${username}! your password is ${password}`);
});

api.listen(7000,function(){
    console.log('api server started')
})