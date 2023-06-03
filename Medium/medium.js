const fs = require('fs');
// here we read all the planets (the whole txt file)
console.log(fs.readFileSync('Medium/planet.txt', 'utf8'))

// here we read through the txt file and print each planet

fs.readFile('Medium/planet.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(`There Is An Error: ${err}`)
    }
    let planets = data.split(',')
    for(let i = 0; i < planets.length; i++){
        console.log(planets[i])
    }
})

