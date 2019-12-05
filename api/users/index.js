import express from 'express';
import { users } from './users';

const router = express.Router();


//GET 
router.get('/', (req, res) => {
    res.send({ users: users });
});

//POST
router.post('/', (req, res) => {
    let newUser = req.body;
    if (newUser) {
        users.push({ name: newUser.name, address: newUser.address, phone_number: newUser.phone_number });
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
            avatar: updateUser.avatar, email: updateUser.email
        });
        res.status(200).send({ message: 'User Updated' });
    } else {
        res.status(400).send({ message: 'Unable to find Contact in request. No Contact Found in body' });
    }
});
//DELETE
router.delete('/:id', (req, res) => {
    const key = req.params.id;
    const index = users.map((users)=>{
return users.uid;
}).indexOf(key);
   if (index > -1) {
users.splice(index, 1);
       res.status(200).send({message: `Deleted user with uid: ${key}.`});
   } else {
     res.status(400).send({message: `Unable to find contact with uid: ${key}.`});
     }
});

export default router;