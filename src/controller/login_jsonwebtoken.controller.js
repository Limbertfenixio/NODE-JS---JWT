const token = require('../services/jwt');

exports.login = (req, res) => {
    var username = req.body.user;
    var password = req.body.password;

    /* Si las credenciales no son correctas enviamos un mensaje al usuario */
    if(!(username === 'lim' && password === '123')){
        res.status(401).send({
            error: 'usuario o contraseña invalidos'
        });
    }else{
        /* Enviamos el token al usuario */
        res.send({token : token.createJWT(username)});
    }
        
}