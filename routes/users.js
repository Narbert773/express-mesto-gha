const usersRouter = require('express').Router();
const {
  getUser, getUserById, createUser, updateUser, updateAvatar,
} = require('../controllers/users');

usersRouter.get('/', getUser);
usersRouter.get('/:userId', getUserById);
usersRouter.post('/', createUser);
usersRouter.patch('/me', updateUser);
usersRouter.patch('/me/avatar', updateAvatar);

module.exports = usersRouter;