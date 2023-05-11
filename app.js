// const number = 35;

// if(number>50){
//   console.log("Large Number");
// }else{

//   console.log("Small Number");
// }

// console.log(__dirname);
// console.log(__filename);

// setInterval(() => {
//    console.log("This is sec interval bound");
// },1000)

//const { log } = require("console");
// const harry = "harry";
// const jim = "jim";
// const tom = "tom";

// const names = require('./namesData')
// const introduceYourself = require('./introductionFunction');

// const names = {harry:"harry",jim: "jim"}

// const introduceYourself = (name) => {
//   console.log("Hi my name is ${name}")
// }

// introduceYourself(names.harry);
// introduceYourself(names.jim);
// introduceYourself(names.tom);

// console.log(names);

// Built in module

//const os = require("os");

// Info about current user 
//console.log(os.userInfo());

// Info about system uptime;
//console.log(os.uptime());

// Practical use case of os module;

// const myOSInfo = {
//   type:os.type(),
//   release:os.release(),
//   totalMem:os.totalmem(),
//   freemem:os.freemem()
// }


// console.log(myOSInfo);

// =======================================================

// Path Module:
// const path = require('path');

// console.log(path.sep);

// const filepath = path.join('\content','subcontent','test.txt');
// console.log(filepath);

// const base = path.basename(filepath);
// console.log(base);

// const absolutePath = path.resolve(__dirname,'content', 'subcontent', 'test.txt');
// console.log(absolutePath);
// =================================================================
// FS
// Reading data from particular file
// Creating and writing data into new file

// const fs = require('fs');
// fs.readFile

// const { readFileSync, writeFileSync } = require('fs');
// const first = readFileSync('./content/subcontent/firstFile.txt','utf8');
// console.log(first);

// const secondFile = readFileSync('./content/subcontent/secondFile.txt','utf8');
// console.log(secondFile);

// writeFileSync('./content/subcontent/newFile.txt', 'This file is created using writeFileSync');

// const newFile = readFileSync('./content/subcontent/newFile.txt','utf8');
// console.log(newFile);

// writeFileSync('./content/subcontent/combinedDataFile.txt',`Combined content is : ${first}, ${secondFile}`);

// //=========================================================================

// // const http = require('http');
// // to set up a web server

// const server = http.createServer((req,res)=>{

//   console.log(req);

//    if (req.url === "/feature"){
//     res.write(`
//   <h1>this is home page</h1>
//   <p>Optimize your financial operations, report on critical SaaS metrics,
//   and monetize your business with a platform built for B2B SaaS.</p>
//   `);
//   res.end();

// })
// }
   


// server.listen(4000);

// ==========================================================

// NPM Setup



const bar = () => console.log('bar');
const baz = () => console.log('baz');

const foo = () => {
  console.log('foo');
  setTimeout(()=>{
    console.log('Task 2 done after a delay of 2 seconds');
  },2000)
  // bar();

  // number 3 task
  baz();
};

// task number : 1 2 3
// task numbers : 1 3 2

foo();