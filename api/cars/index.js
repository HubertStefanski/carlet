import express from 'express';
import { cars } from './cars';

const router = express.Router();


//GET 
router.get('/', (req, res) => {
    res.send({ cars: cars });
});

//POST
router.post('/', (req, res) => {
    let newCar = req.body;
    if (newCar) {
        cars.push({ name: newCar.name, address: newCar.address, phone_number: newCar.phone_number });
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

export default router;