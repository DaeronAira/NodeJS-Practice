const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('Привет мир! \n --- \n');
writeableStream.write('Продолжение записи \n --- \n');
writeableStream.end('Завершение записи \n ---');
let readableStream = fs.createReadStream(
    'hello.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});