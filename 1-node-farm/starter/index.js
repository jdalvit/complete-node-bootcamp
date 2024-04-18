const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////////////////////////////////
// Files

// Sync, blocking
// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// Async, non-blocking
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.error('ERROR!');
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//                 console.log('file written');
//             })
//         });
//     });
// });
// console.log('started reading');

//////////////////////////////////////////
// Server
const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathname = req.url;

  if (pathname === "/" || pathname === "/overview") {
    res.end("TODO overview page");
  } else if (pathname === "/product") {
    res.end("TODO product page");
  } else {
    res.end("url not found");
  }
});

// server.listen('8000', 'localhost', )
server.listen("8000", "127.0.0.1", () => {
  console.log("listening on port 8000");
});
