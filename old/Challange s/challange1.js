    // Using CommonJS syntax:
    const fs = require('fs');


    try {
        // ***********************1****************************

        // create a folder with name of hmc if it don't exist 
        // var dir = 'HMC';

        // if (!fs.existsSync(dir)){
        //     fs.mkdirSync(dir);
        // }
        // ****************************************************






    // *************************2**************************

    // create a file bio into hmc folder and add data 

    // fs.writeFileSync('./HMC/bio.txt',"Hi, I am Hassan.")

    // ***************************************************








 // **************************3*************************

    // Add data into bio.txt in the end of file 

    // fs.appendFileSync('./HMC/bio.txt',"I am software engineer.")

    // ***************************************************





     // **************************4*************************

            // Read Data without getting Buffer data 

         //    let readFile= fs.readFileSync('./HMC/bio.txt','utf8')
            
            // console.log(readFile);
            
    // ******************************************************






         // **************************5*************************

        // Rename and replace the path of file 

            // fs.renameSync('MyBio.txt','./HMC/MyBio.txt')

        
        
         // ****************************************************




    
         // *************************6**************************


        // delete both file and folder  
        // Delete File
    //    fs.unlink('./HMC/MyBio.txt', (err) => {
    //         if (err) throw err;
    //         console.log('successfully deleted /HMC/MyBio.txt');
    //       });    







    //  Delete Folder
    //    fs.rmdir('HMC', (err) => {
    //         if (err) throw err;
    //         console.log('successfully deleted Folder HMC');
    //       });   

         // ****************************************************







    } catch (error) {
    console.log(error); 
    }


