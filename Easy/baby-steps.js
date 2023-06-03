//"process" is a global object, this object has an arhv property
// which is an array containing the complete command-line
    let sum = 0;
    let x = process.argv;
    
    for(let i = 0; i < x.length; i++){
        x[i] = Number(x[i])
        if(!isNaN(x[i])){
            sum += x[i]
        }
        
    }
    console.log(sum)




