const router = require("express").Router();

const connection = require("../connections/connection");

//getallmovcat
router.get("/get/movcat", (req, res) => {
  const sql = `select m.nama as NamaMovie, c.nama as NamaCategory from movcat mc join movies m on m.id = movie_id
  join categories c on c.id = category_id`;

  connection.query(sql, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

//addmovcat
router.post("/add/movcat/:movie_id/:category_id", (req, res) => {
  const sql = `insert into movcat (movie_id, category_id) values (${
    req.params.movie_id
  }, ${req.params.category_id})`;
  const sql2 = `select mc.id as idMovcat, m.nama as NamaMovie, c.nama as NamaCategory from movcat mc join movies m on m.id = movie_id
  join categories c on c.id = category_id`;

  connection.query(sql, (err, result) => {
    if (err) return res.send(err);

    connection.query(sql2, (err, result) => {
      if (err) return res.send(err);

      res.send(result);
    });
  });
});

//deletemovcat
router.delete("/delete/movcat/:id_movcat", (req, res) => {
  const sql = `delete from movcat where id = ${req.params.id_movcat}`;

  connection.query(sql, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

module.exports = router;
