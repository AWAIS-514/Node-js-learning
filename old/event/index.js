const EventEmitter = require('events');
const fs=require('fs')

const myEmitter = new EventEmitter();


myEmitter.on('Make_a_File', () => {
    fs.writeFile('data.txt',"HEllo i am there", 'utf8',(err) => {
        if (err){
            console.log(err);
        };
        console.log('The file has been saved!');
      });

})


myEmitter.emit('Make_a_File');
