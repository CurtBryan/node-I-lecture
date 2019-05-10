const express = require("express");
const data = require("./data.json");
const app = express();

app.get("/api/user", (req, res, next) => {
  res.status(200).send(data);
});

app.get("/api/user/:id", (req, res, next) => {
  const { id } = req.params;
  const foundUser = data.filter(user => {
    return user.id === parseInt(id);
  });
  res.status(200).send(foundUser);
});

app.get("/api/get_school/:school", (req, res, next) => {
  const { school } = req.params;
  const { email, name } = req.query;
  const foundUser = data.filter(user => {
    return user.school === school;
  });
  res.status(200).json(foundUser);
});

const port = 4000;
app.listen(port, () => console.log(`listning on port ${port}`));
