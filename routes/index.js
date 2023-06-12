const router = require('express').Router();
const userRouter = require('./users');
const cardRouter = require('./cards');

const {
  createUser, login,
} = require('../controllers/users');
const { createUserValidator, loginValidator } = require('../middlewares/validator');

router.post('/signup', createUserValidator, createUser);
router.post('/signin', loginValidator, login);

router.use('/users', userRouter);
router.use('/cards', cardRouter);

module.exports = router;
