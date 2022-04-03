require("../models/mongoose")
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.urlencoded({ extended: true }))
const userRoute = require("./userRoute")
const adminRoute = require("./adminRoute")
const customerRoute = require("./customerRoute")
const organizerRoute = require("./organizerRoute")
const managerRoute = require("./managerRoute")

app.use(function (req, res, next) {
    // res.header("Access-Control-Allow-Origin", "0.0.0.0");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 
app.use(cors())

app.use(express.json())
app.use("/user", userRoute)
app.use("/admin", adminRoute)
app.use("/manager", managerRoute)
app.use("/organizer", organizerRoute)
app.use("/customer", customerRoute)

module.exports = { app }