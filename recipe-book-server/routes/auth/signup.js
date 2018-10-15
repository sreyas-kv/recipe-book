'use strict';
const express = require('express');
const router = express.Router();
const { User } = require('../../models/userSchema');
const bodyParser = require('body-parser');

const app = express();
// app.use(express.json());

router.get('/', (req, res) => {
    res.send('Hello world');
});

router.post('/',(req, res) => {
    console.log(req.body);
    User
    .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    })
    .then(user => res.status(201).json(user.serialize()))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Something went wrong' });
    });

    // res.json(req.body);

});

module.exports = router;