
const sql = require('./db.js')

const User = function(user) {
    this.user_id = user.user_id
    this.admin_id = user.admin_id
    this.user_name = user.user_name
    this.created_at = user.created_at 

}

User.getAll = result => {
    sql.query("SELECT user_id, user_name FROM tb_user LIMIT 10", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("users: ", res);
      result(null, res);
    });
};
User.findById = (userId, result) => {
    sql.query(`SELECT user_id FROM tb_user WHERE id = ${userId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      result({ kind: "not_found" }, null);
    });
  };
  