import express from 'express';
import { users } from './users';
import { stubAPI } from './stubAPI';

const router = express.Router();


//GET 
router.get('/', (req, res) => {
    res.send({ users: users });
});

//POST
router.post('/', (req, res) => {
    let newUser = req.body;
    if (newUser) {
        users.push({ uid: newUser.uid, name: newUser.name, password: newUser.password, avatar: newUser.avatar, regDate: newUser.regDate, email: newUser.email, userRating: newUser.userRating });
        res.status(201).send({ message: "User Created" });
    } else {
        res.status(400).send({ message: "Unable to find Contact in request. No Contact Found in body" });
    }
});
//UPDATE
router.put('/:id', (req, res) => {
    const key = req.params.id;
    const updateUser = req.body;
    const index = users.map((users) => {
        return users.uid;
    }).indexOf(key);
    if (index !== -1) {
        users.splice(index, 1, {
            name: updateUser.name, password: updateUser.password,
            avatar: updateUser.avatar, email: updateUser.email, userRating: updateUser.userRating
        });
        res.status(200).send({ message: 'User Updated' });
    } else {
        res.status(400).send({ message: 'Unable to find User in request. No User Found in body' });
    }
});
//DELETE
router.delete('/:id', (req, res) => {
    const key = req.params.id;
    const index = users.map((users) => {
        return users.uid;
    }).indexOf(key);
    if (index > -1) {
        users.splice(index, 1);
        res.status(200).send({ message: `Deleted user with uid: ${key}.` });
    } else {
        res.status(400).send({ message: `Unable to find contact with uid: ${key}.` });
    }
});

//POST userRating
router.post('/:id/userRating', (req, res) => {
    const uid = req.params.id;
    if (stubAPI.rateUser(uid)) {
        return res.status(200).send({ message: `user ${uid} Upvoted` });
    }
    return res.status(404).send({ message: `Unable to find user ${uid}` });
});

export default router;