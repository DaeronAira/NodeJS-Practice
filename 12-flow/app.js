const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('1. Основы Node.js: \n · Что такое Node.js и его архитектура. \n · Установка Node.js и npm (Node Package Manager). \n · Основы работы с REPL (Read-Eval-Print Loop). \n');
writeableStream.write('2. Модули и пакеты: \n · Импорт и экспорт модулей в Node.js. \n · Использование сторонних пакетов с помощью npm. \n · Понимание разницы между глобальными и локальными пакетами. \n');
writeableStream.write('3. Система файлов и потоки (File System and Streams): \n · Работа с файлами и директориями в Node.js \n · Использование потоков для обработки данных. \n');
writeableStream.write('4. Асинхронное программирование: \n · Обзор колбэков (callbacks) и промисов (Promises). \n · Применение async/await для управления асинхронным кодом. \n');
writeableStream.write('5. Express.js и веб-разработка: \n · Введение в Express.js и создание веб-сервера. \n · Работа с маршрутами (routes) и обработка запросов. \n · Промежуточное ПО (middleware) в Express. \n');
writeableStream.write('6. WebSocket и реальное время: \n · Введение в WebSocket и библиотеку Socket.io. \n');
writeableStream.write('7. Базы данных: \n · Подключение и работа с базами данных, такими как MongoDB или MySQL. \n');
writeableStream.end('8. Аутентификация и безопасность: \n · Реализация аутентификации и авторизации в Node.js приложении. \n · Защита приложения от атак, таких как инъекции и CSRF (межсайтовая подделка запроса).');
let readableStream = fs.createReadStream(
    'hello.txt',
    'utf8'
);

readableStream.on('data', function (chunk) {
    console.log(chunk);
});