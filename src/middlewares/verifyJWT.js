const jwt = require('jsonwebtoken');

/* Middleware encargado de verificar si el usuario tiene el token valido para acceder a las demas rutas */

const checkToken = (req, res, next) => {
    try {
        /* Recuperamos el header de la petición */
        var token = req.headers['authorization']
        /* Si el token no se encuentra retornamos no autorizado */
        if(!token){
            res.status(401).send({
                error: 'Usuario no autorizado'
            })
            return;
        }

        /* Debemos retirar el substring Bearer que vienen en las especificaciones de HTTP */
        token = token.replace('Bearer ', '');

        /* Validamos el token y que no sea caduco, si todo sale bien permitimos el acceso */
        jwt.verify(token, 'secret-password', (err, user) => {
            if(err){
                res.status(401).send({
                    error: 'Token invalido'
                });
            } else{
                next();
                /* res.send({
                    message: 'Token Valido Bienvenido'
                }); */
            }
        });
   } catch (error) {
     res.status(403).send({
         message: 'Usuario no autorizado'
     });     
   };
};

module.exports = { checkToken: checkToken };