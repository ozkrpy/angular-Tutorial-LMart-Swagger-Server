var User = require('../sequelize');

module.exports = (app) => {
    app.post('/registerUser', (req, res) => {
        console.log(req.body.first_name);
        if (req.body === null) {
            //console.log('no se recibieron datos de entrada');
            res.json('no se recibieron datos de entrada');
        }
        //console.log(req);
        const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        };
        //console.log(data);
        if (data.password === '' || data.username === '') {
            res.json('usuario y contraseña requeridos');
        }
        User.findOne({
                where: {
                    username: data.username
                }
            }).then(user => {
                if (user != null) {
                    console.log('usuario ya existe');
                    res.json('usuario ya existe');
                } else {
                    console.log('password ok');
                    User.create({
                        first_name: data.first_name,
                        last_name: data.last_name,
                        email: data.email,
                        username: data.username,
                        password: data.password,
                    })
                    console.log('usuario creado');
                    res.json('usuario creado');
                }
            })
            .catch(err => {
                console.log(`error al comunicarse con la db: ${err}`);
                res.status(500).json(err);

            })
    })
};