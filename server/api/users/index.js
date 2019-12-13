import express from 'express';
import User from './userModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line


// Get all users, using try/catch to handle errors
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    handleError(res, error.message);
  }
});

router.get('/:id', asyncHandler(async (req, res) => {
  const id =req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    handleError(res, error.message);
  }  
}));
router.post('/', asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
}));

// // Create a user, using async handler
// router.post('/', asyncHandler(async (req, res) => {
//   const newUser = req.body;
//   if (newUser) {
//         const user = await User.create(newUser);
//         return res.status(201).send({user});
//     } else {
//        return handleError(res, err);
//     }
// }));

// Update usersm
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const user = await User.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!user) return res.sendStatus(404);
  return res.json(200, user);
}));

// Delete a user
router.delete('/:id', asyncHandler(async (req, res) => {
  const user = await user.findById(req.params.id);
  if (!user) return res.send(404);
  await user.remove();
  return res.status(204).send(user);
}));


/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
};

export default router;