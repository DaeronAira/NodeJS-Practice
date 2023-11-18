// получаем модуль Express
const express = require('express');
// создаем приложение
const app = express();

// устанавливаем обработчик для маршрута "/"
app.get('/', function (request, response) {
    response.end('Hello from Express!');
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);

// Обработчик для остановки сервера по Ctrl+C
process.on('SIGINT', function () {
  console.log('Stopping the server...');
  server.close(function () {
      console.log('Server stopped.');
      process.exit();
  });
});