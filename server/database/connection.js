const mongoose = require('mongoose')

function RunServer(){
    try{
        mongoose.connect('mongodb://localhost:27017/project1');
        console.log('mongodb connected')
    }
    catch{
        console.log(error.message)
    }
    
}
module.exports=RunServer;

