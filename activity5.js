const express=require('express');
var api=express();

api.get('/',function(request,response){
    response.send('I am default root');
});

api.get('/girlswear',function(request,response){
    response.send('1.half saree\n2.saree\n3.skirts\n4.jeans\n5.crop tops');
});

api.get('/gentswear',function(request,response){
    response.send('1.shirt\n2.pants\n3.t-shirt\n4.jeans\n5.suit');
});
api.get('/electronicgadgets',function(request,response){
    response.send('1.mobiles\n2.laptops\n3.buds\n4.earphones');
});
api.get('/fruits',function(request,response){
    response.send('1.grapes\n2.promogranate\n3.pineapple\n4.banana\n5.apple');
});
api.get('/vegetables',function(request,response){
    response.send('1.cabbage\n2.potato\n3.beetroot\n4.carrot\n5.tomamto');
});
api.get('/languages',function(request,response){
    response.send('1.french\n2.korean\n3.english\n4.hindi\n5.telugu');
});
api.get('/qualifications',function(request,response){
    response.send('1.SSC\n2.INTERMEDIATE\n3.BTECH\n4.MTECH\n');
});
api.get('/companies',function(request,response){
    response.send('1.infosys\n2.microsoft\n3.google\n4.capgemini\n5.tcs');
});
api.get('/states',function(request,response){
    response.send('1.ap\n2.ts\n3.tamilnadu\n4.karnataka\n5.arunachalpradesh');
});
api.get('/countries',function(request,response){
    response.send('1.INDIA\n2.CANADA\n3.CHINA\n4.GERMANY\n5.AUSTRALIA');
});
api.get('/sports',function(request,response){
    response.send('1.volleyball\n2.throwball\n3.criket\n4.football\n5.basketball');
});
api.get('/indoorgames',function(request,response){
    response.send('1.carroms\n2.chess\n3.hide&seek\n4.table tennis\n');
});
api.get('/programminglanguages',function(request,response){
    response.send('1.c\n2.python\n3.java\n4.javascript\n5.c++');
});
api.get('/branches',function(request,response){
    response.send('1.cse\n2.ece\n3.csd\n4.cai\n5.csm');
});
api.get('/colleges',function(request,response){
    response.send('1.kits\n2.rvrjc\n3.vvit\n4.ciet\n5.khit');
});
api.listen(7000,function(){
    console.log('api server started')
})