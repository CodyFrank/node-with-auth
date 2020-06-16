const express = require('express')
const app = express()

// import routes
const authRoute = require('./routes/auth')

// Routes middlewares
app.use('/api/users', authRoute())



app.listen(3000, () => console.log("server is running ..."))