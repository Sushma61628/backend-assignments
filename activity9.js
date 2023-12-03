const express=require('express');
var api=express();

const bodyParser=require('body-parser');
api.use(bodyParser.json());

api.get('/',function(request,response){
    response.send('I am default root');
});

api.post('/create',function(request,response){
    const {name,email}=request.body;
    response.send(`user ${name} and email id ${email} created succesfully`);
});

api.listen(8000,function(){
    console.log('api server started')
})