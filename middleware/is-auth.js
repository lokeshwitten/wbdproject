const { decode } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');

exports.isAuth = (req, res, next) => {
    const authHeader = req.get('Authorization');
    const token = authHeader.split(' ')[1]
    const decodedToken = jwt.verify(token, 'somesupersecretkey')
    if (!decodedToken) {
        res.status(302)
        res.json({ message: "Authentication Failure" })
        res.end()
    }
    next();
};