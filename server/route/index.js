var controller = require('../controller');
module.exports = function (app) {
    app.get('/', controller.homeIndex);
    //app.get('/login*', controller.siteIndex);
    //app.get('/register*', controller.siteIndex);

    app.get('/user*',controller.appIndex);
    app.get('/hotsport*',controller.appIndex);

    require('./user')(app);
    require('./article')(app);

};
