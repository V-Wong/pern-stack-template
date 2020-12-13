import express from "express";
import pool from "./dbConfig/dbConfig";

const app = express();
const port = 4000;

app.get("/", (_, res) => {
  res.send('Hello World!');
});

app.get("/persons", (_, res) => {
  pool.query("SELECT * from person", (err, results) => {
    if (!err) res.send(results.rows[0]);
    else console.log(results);
  });
});

app.get("/projects", (req, res) => {
  if (req.query.person_id) {
    pool.query("SELECT * from project where person_id = $1", [req.query.person_id], (err, results) => {
      if (!err) res.send(results.rows[0]);
      else console.log(err);
    });
  } else {
    pool.query("SELECT * from project", (err, results) => {
      if (!err) res.send(results.rows[0]);
      else console.log(err);
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
