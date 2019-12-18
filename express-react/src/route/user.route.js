const UserController = require('../controller/user.controller');

exports.routesConfig = (app) => {

    app.get('/users', [
        UserController.list
    ]);

};
