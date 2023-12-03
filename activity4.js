const express=require('express');
var api=express();

api.get('/',function(request,response){
    response.send('I am default root');
});

api.get('/friend',function(request,response){
    response.send('My friend');
});

api.get('/enemy',function(request,response){
    response.send('My enemy');
});

api.listen(7000,function(){
    console.log('api server started')
})