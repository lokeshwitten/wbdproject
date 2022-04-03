const jwt = require('jsonwebtoken')
const User = require('../models/user')
exports.signup = (req, res, next) => {
    const token = jwt.sign({ user: 'Lokesh', email: 'gurorkrupa@gmail.com' },
        'somesupersecretkey', { expiresIn: '1h' })
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(
        (result) => {
            console.log(result)
            res.status(200).json({ token: token, message: "Sign Up success", isAuth: true, userid: result.id })
        }
    )

}
exports.login = (req, res, next) => {
    res.status(200).json({ name: 'Lokesh' })
}