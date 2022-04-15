const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/' , (req,res) =>{
    res.send("");
})

app.post('/bfhl', (req,res) =>{
    var a = {}
    const body = req.body.data;
    const user_id = 'adityacs_mishra_300121';
    const email = "adityamishra102000@gmail.com";
    const roll_number = "0837cs191011";
    var numbers = [];
    var alphabets = [];
    var is_success = true;
    numbers_length = 0;
    alphabets_length = 0;
  
    for(i=0; i<body.length; i++){

        if(isNaN(parseInt(body[i]))){
            alphabets[alphabets_length++] = body[i];
        }
        else{
            numbers[numbers_length++] = parseInt(body[i]);
        }
    }
    if(is_success){
        a = {
            "is_success" : is_success,
            "user_id": user_id,
            "email" : email,
            "roll_number": roll_number,
            "numbers": numbers,
            "alphabets" : alphabets
        }
    }
    else{
        a = {
            "is_success" : is_success,
            "user_id": user_id,
            "email" : email,
            "roll_number": roll_number            
        }   
    }
    res.json(a);
});

var port = process.env.PORT || '3000';

app.listen(port);