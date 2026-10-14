// const os=require('os');
// const fs=require('fs');
// const crypto=require('crypto');
const dns=require('dns');

// console.log(os.platform()); //win 32 || linux || darwin 
// console.log(os.arch()); //x64 || x86 || arm64
// console.log(os.cpus()); //4|| 8||12
// console.log(os.homedir());
// console.log(os.totalmem()/(1024*1024*1024) + " GB");
// console.log(os.freemem()/(1024*1024) + " MB");


// const filepath=path.resolve("core_modules.js");
// console.log(filepath);

// const filepath=path.resolve("__dirname, core_modules.js");
// console.log(__dirname);


// const filepath=path.join("BACKEND","lecture 5","core_modules.js");
// const filepath=path.join("os.homedir(), "Documents");
// console.log(filepath);


// const file="BACKEND/lecture 5/core_modules.js";
// console.log(path.basename(file));
// console.log(filename);

// const data=fs.readFileSync("./sample.txt", "utf-8"); //synchronous
// console.log(data);

// fs.readFile("./sample.txt", "utf-8", (err, data)=>{ //asynchronous
//     if(err){
//         console.log(err);
//     }else{ 
//         console.log(data);
//     }

//     console.log("B")

// fs.writeFileSync("./sample.txt", "Hello, World!"); //synchronous

// fs.writeFile("./sample.txt", "Hello, World!", (err)=>{ //asynchronous
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File updated");
//     }
// })

// fs.appendFile("./sample.txt", "\nHello, World! again");

// fs.unlinkSync("./sample.txt");
// console.log("file deleted");

// const password="Alex@123";
// const hash=crypto.createHash("sha256").update(password).digest("hex");
// console.log(hash);

// const salt=crypto.randomBytes(16).toString("hex");
// console.log(salt);

// const hash=crypto.createHash("sha256",salt).update("password").digest("hex");
// console.log(hash);

// dns.lookup("www.google.com", (err, address, family)=>{  
//     if(err){
//         console.log(err);
//     }else{
//         console.log(address);
//         console.log(family);
//     } 

    dns.reverse("8.8.8.8", (err, hostnames)=>{
        if(err){
            console.log(err);
        }else{
            console.log(hostnames);
        }
    })