const express = require("express");
const app = express();

app.disable("x-powered-by");

let users = [
  {
    name: "Kazimierz",
    username: "kazik",
    email: "kazik@domena.pl",
    id: 1,
  },
  {
    name: "Jaroslaw",
    lastname: "jaro",
    email: "jaro@domenta.pl",
    id: 2,
  },
  {
    name: "daniel",
    lastname: "chmur",
    email: "daniel@domena.pl",
    id: 10,
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/add", (req, res) => {
  if (!req.query.name || !req.query.username || !req.query.email) {
    res.status(400).send("Missing parameters");
  }

  let userIds = users.map((u) => u.id);
  let maxUserId = Math.max(...userIds);
  let newUserId = maxUserId + 1;

  let user = {
    name: req.query.name,
    username: req.query.username,
    email: req.query.email,
    id: newUserId,
  };

  users.push(user);
  res.statusCode = 201;
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.filter((user) => user.id == req.params.id);

  if (user.length == 0) {
    res.status(404).send("User not found");
  }

  res.json(user[0]);
});

app.delete("/delete/:id", (req, res) => {
  const userExists = users.find((user) => {
    return user.id == req.params.id;
  });

  if (!userExists) {
    res.statusCode = 404;
    res.send("Not found");
  } else {
    users = users.filter((user) => user.id != req.params.id);

    res.statusCode = 204;
    res.send();
  }
});

app.listen(4700, () => console.log("server at port 4700"));
