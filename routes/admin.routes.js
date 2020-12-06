module.exports = app => {
    const admin = require("../controllers/admin.controller.js");
    
    
    
    app.get("/admin", admin.findAll);
    
    
    
    
    }