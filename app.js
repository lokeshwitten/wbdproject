const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth')
const blogRoutes = require('./routes/blog')
const sequelize = require('./util/database');
const Blog = require('./models/blog');
const User = require('./models/user');

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes)
app.use('/blog', blogRoutes)

sequelize
//.sync({ force: true })
    .sync()
    .then(result => {

        app.listen(8080)
    })