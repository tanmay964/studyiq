module.exports = app => {
const users = require("../controllers/user.controller.js");



app.get("/users", users.findAll);


app.get("/user/:userId", users.findOne);


}
