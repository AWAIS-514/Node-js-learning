const fs = require("fs");

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

fs.unlinkSync(`${dir}/file.txt`);
