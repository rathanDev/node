const express = require('express');
const app = express();



const UserRoute = require('./route/user.route');
UserRoute.routesConfig(app);



const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Web service listening on port ${port}`);
});



app.get('/', (req, res) => {
    res.send('Wait... I am working on it!!!');
});
