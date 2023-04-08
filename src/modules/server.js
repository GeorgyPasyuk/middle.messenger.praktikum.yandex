const server = require('express');
const path = require("path");

const app = server();
const PORT = 3000;


app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
