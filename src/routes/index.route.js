const express = require('express');
const router = express.Router();
const middlewareJsonWebToken = require('../middlewares/verifyJWT');
const JsonWebTokenController = require('../controller/login_jsonwebtoken.controller');

/* Ruta de login para JsonWebToken */
router.post('/login-jwt', JsonWebTokenController.login);

/* Hacemos uso del middleware de protección de rutas jsonwebtoken */
router.use(middlewareJsonWebToken.checkToken);
router.get('/secure', (req, res) => {
   res.send('Usuario logueado')
});

module.exports = router;