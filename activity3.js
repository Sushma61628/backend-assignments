const express=require('express');
var api=express();

api.get('/',function(request,response){
    response.send('I am default root');
});

api.get('/data',function(request,response){
    response.send('welcome to express');
});

api.listen(7000,function(){
    console.log('api server started')
})