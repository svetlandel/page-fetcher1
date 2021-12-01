const fs = require('fs');
const https = require('http');
const args = process.argv;
const url = String(args[2]);
const location = String(args[3]);
https.get(url, (res) => {
const file = fs.createWriteStream(location);
res.pipe(file);
   file.on('finish', () => {
        file.close();
        console.log(`Downloaded and saved ` + file.bytesWritten + ` bytes to the` + location);
    });
}).on("error", (err) => {
    console.log("Error: ", err.message);
});