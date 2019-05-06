const router = require("express").Router();

const connection = require("../connections/connection");

//addmovie
router.post("/add/movie", (req, res) => {
  Object.keys(req.body).forEach(key => {
    if (!req.body[key]) {
      req.body[key] = null;
    }
  });
  const sql = `insert into movies set ?`;

  connection.query(sql, req.body, (err, result) => {
    if (err) return res.send(err.sqlMessage);

    res.send(result);
  });
});

//editmovie
router.patch("/edit/movie/:movie_id", (req, res) => {
  Object.keys(req.body).forEach(key => {
    if (!req.body[key]) {
      req.body[key] = null;
    }
  });
  const sql = `update movies set ? where id = ${req.params.movie_id}`;

  connection.query(sql, req.body, (err, result) => {
    if (err) return res.send(err.sqlMessage);

    res.send(result);
  });
});

//deletemovie
router.delete("/delete/movie/:movie_id", (req, res) => {
  const sql = `delete from movies where id = ${req.params.movie_id}`;

  connection.query(sql, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

//getallmovie
router.get("/get/movie", (req, res) => {
  const sql = `select * from movies`;

  connection.query(sql, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

module.exports = router;
