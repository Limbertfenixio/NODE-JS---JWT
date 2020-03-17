var jwt  = require('jsonwebtoken');
var bodyParser = require('body-parser');

exports.createJWT = (username) => {
    /* El dato del token sera el nombre de usuario */
    var tokenData = {username: username}

    /* Creamos un token al usuario */
    var token = jwt.sign(tokenData, 'secret-password', {
        expiresIn: 60 * 60 * 24 //Expira en 24 horas 
    });
    
    return token;
};