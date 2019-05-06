const router = require("express").Router();

const connection = require("../connections/connection");

//addcategory
router.post("/add/category", (req, res) => {
  Object.keys(req.body).forEach(key => {
    if (!req.body[key]) {
      req.body[key] = null;
    }
  });
  const sql = `insert into categories set ?`;

  connection.query(sql, req.body, (err, result) => {
    if (err) return res.send(err.sqlMessage);

    res.send(result);
  });
});

//editcategory
router.patch("/edit/category/:category_id", (req, res) => {
  Object.keys(req.body).forEach(key => {
    if (!req.body[key]) {
      req.body[key] = null;
    }
  });
  const sql = `update categories set ? where id = ${req.params.category_id}`;

  connection.query(sql, req.body, (err, result) => {
    if (err) return res.send(err.sqlMessage);

    res.send(result);
  });
});

//deletecategory
router.delete("/delete/category/:category_id", (req, res) => {
  const sql = `delete from categories where id = ${req.params.category_id}`;

  connection.query(sql, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

//getallcategories
router.get("/get/category", (req, res) => {
  const sql = `select * from categories`;

  connection.query(sql, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

module.exports = router;
