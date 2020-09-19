/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();
const { getUserById } = require('../db/user-queries');

// GET /users/:id
router.get('/:id', (req, res) => {
  getUserById(req.params.id)
    .then((user) => {
      res.json({ user });
    })
});

module.exports = router;

