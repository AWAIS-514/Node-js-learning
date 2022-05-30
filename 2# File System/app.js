const fs = require("fs");

// try {
  // create a folder with name of hmc if it don't exist

//   var dir = "./hmc";
//   if (fs.existsSync(dir)) {
//     console.log("EXIST");
//   } else {
//     console.log("NOT EXIST");
//     fs.mkdirSync("./hmc");
//   }
// } catch (error) {
//   console.log(error);
// }

// create a file bio into hmc folder and add data

// fs.writeFileSync(`${dir}/file.txt`, "Hello i am hassan", "latin1");

// Add data into bio.txt in the end of file

// fs.appendFileSync("./hmc/file.txt", "Remaning Data will be saved after ");

// Read Data from File

// let result = fs.readFileSync(`${dir}/file.txt`, "latin1");

// console.log(result);
try {
  // create a folder with name of hmc if it don't exist

  var dir = "./hmc";
  if (fs.existsSync(dir)) {
    console.log("EXIST");
  } else {
    console.log("NOT EXIST");
    fs.mkdirSync("./hmc");
  }
} catch (error) {
  console.log(error);
}

// create a file bio into hmc folder and add data

fs.writeFileSync(`${dir}/file.txt`, "Hello i am hassan", "latin1");

// Add data into bio.txt in the end of file

fs.appendFileSync("./hmc/file.txt", "Remaning Data will be saved after ");

// Read Data from File

let result = fs.readFileSync(`${dir}/file.txt`, "latin1");

console.log(result);


// Rename File and Replace File Path

// fs.renameSync(`${dir}/file.txt`,'student.txt')

// Delete File

 HEAD
// fs.unlinkSync(`${dir}/file.txt`);




// Create File And  write Data in it

fs.writeFile('./hmc/file.js',"HELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLD",
(error)=>{
  console.log(error,"FILE ALREADY")
})
fs.unlinkSync(`${dir}/file.txt`);

