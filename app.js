const express = require('express');

const app = express();

app.use("api/v1", (req, res) => {
  res.json({
    message: "Testing Heroku deploy"
  });
})

app.use("api/v1/users", (req, res) => {
  res.json({
    id: 1,
    firstname: 'Academlo',
    lastname: 'Testing',
    email: 'testing@academlo.com'
  });
})

module.exports = app;