const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Wait... I am workin on it!!!');
});

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Web service listening on port ${port}`);
});
