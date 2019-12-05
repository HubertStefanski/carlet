import express from 'express';
import { cars } from './cars';
import stubAPI from './stubAPI';


const router = express.Router();


//GET 
router.get('/', (req, res) => {
    const cars = stubAPI.getAll();
    res.send({ cars: cars });
});

//POST
router.post('/', (req, res) => {
    let newCar = req.body;
    if (newCar) {
        cars.push({ uid: newCar.uid, type: newCar.type, picture: newCar.picture, brand: newCar.brand, model: newCar.model, year: newCar.year, owner: newCar.owner, price: newCar.price });
        res.status(201).send({ message: "Car Created" });
    } else {
        res.status(400).send({ message: "Unable to find Contact in request. No Contact Found in body" });
    }
});
//UPDATE
router.put('/:id', (req, res) => {
    const key = req.params.id;
    const updateCar = req.body;
    const index = cars.map((cars) => {
        return cars.uid;
    }).indexOf(key);
    if (index !== -1) {
        cars.splice(index, 1, {
            type: updateCar.type, picture: updateCar.picture,
            brand: updateCar.brand, model: updateCar.model, year: updateCar.year, price: updateCar.price
        });
        res.status(200).send({ message: 'Car Updated' });
    } else {
        res.status(400).send({ message: 'Unable to find Contact in request. No Contact Found in body' });
    }
});
//DELETE
router.delete('/:id', (req, res) => {
    const key = req.params.id;
    const index = cars.map((cars) => {
        return cars.uid;
    }).indexOf(key);
    if (index > -1) {
        cars.splice(index, 1);
        res.status(200).send({ message: `Deleted car with uid: ${key}.` });
    } else {
        res.status(400).send({ message: `Unable to find car with uid: ${key}.` });
    }
});

export default router;