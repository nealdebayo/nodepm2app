const app = require('express')();
const port = process.env.PORT | 5000;

app.get('/', (req, res) => {
    res.send('Hello world!');
}).listen(port);

console.log(`Server runs on localhost:${port}`);
