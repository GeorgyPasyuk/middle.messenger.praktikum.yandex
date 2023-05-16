import server from "express"
import * as path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = server();
const PORT = 3000;


app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});


