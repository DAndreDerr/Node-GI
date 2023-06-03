const fs = require('fs')
const path = require('path')
const file = process.argv[2];
const ext = `.${process.argv[3]}`

fs.readdir(file, (err, list) => {
     if(err){
        return console.log(err)
     };
     list.forEach((list)=>{
        if(path.extname(list) === ext){
            console.log(list)
        }
     })
});