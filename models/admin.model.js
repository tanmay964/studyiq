const sql = require('./db.js')

const Admin = function(admin){
    this.admin_id = admin.admin_id
    this.is_active = admin.active_at
    this.created_at = admin.created_at
    this.admin_name = admin.admin_name
}

Admin.getAll = result => {
    sql.query("SELECT tb_user.user_id, tb_user.user_name FROM tb_user WHERE EXISTS( SELECT 1 FROM tb_user on tb_user.user_name = tb_admin.admin_name) HAVING COUNT(admin_name) <=3  ", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("users: ", res);
      result(null, res);
    });
};