const express = require('express');
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require('../controllers/userControllers');

const router = express.Router();

router.post('/auth/login', loginUser);
router.get('/users', getUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
