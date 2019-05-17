var User = require('../sequelize');

module.exports = (app) => {
    app.get('/getFullUsers', (req, res) => {
        //console.log("todos los usuarios", req, res);
        User.findAll().then(user => {
            //console.log(user);
            res.json(user);
        });
    })
}