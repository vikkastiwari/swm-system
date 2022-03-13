const jwt = require('jsonwebtoken');
const config = require('config');

module.exports =
  (...userType) =>
  (req, res, next) => {
    const token = req.header('x-auth-token');
    // console.log(token);

    if (!token) {
      return res.status(401).send({
        success: false,
        alerts: [
          {
            type: 'error',
            message: 'You are unauthenticated to perform this action.',
          },
        ],
      });
    }

    try {
      const payload = jwt.verify(token, config.get('jwtPrivateKey'));
      
      if(!userType.includes(payload.userType)){
        return res.status(403).send({
          success: false,
          alerts: [{ type: 'error', message: 'You are unauthorized to perform this action.' }],
        });
      }

      req.user = payload;
      next();
    } catch (ex) {

      return res.status(400).send({
        success: false,
        alerts: [{ type: 'error', message: 'Invalid token provided.' }],
      });
    }
  };
