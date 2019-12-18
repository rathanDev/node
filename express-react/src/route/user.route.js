const UserController = require('../controller/user.controller');

exports.routesConfig = (app) => {

    app.get('/user/all', [
        UserController.list
    ]);

};
