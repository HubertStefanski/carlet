import express from 'express';
import asyncHandler from 'express-async-handler';
import Car from './carModel';


const router = express.Router();


//GET 
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        handleError(res, error.message);
    }
});
//POST
// Create a user, using async handler
router.post('/', asyncHandler(async (req, res) => {
    const car = await Car.create(req.body);
    res.status(201).json(car);
}));
//UPDATE
router.put('/:id', asyncHandler(async (req, res) => {
    if (req.body._id) delete req.body._id;
    const car = await Car.update({
        _id: req.params.id,
    }, req.body, {
        upsert: false,
    });
    if (!user) return res.sendStatus(404);
    return res.json(200, car);
}));

//DELETE
router.delete('/:id', asyncHandler(async (req, res) => {
    const car = await car.findById(req.params.id);
    if (!car) return res.send(404);
    await car.remove();
    return res.status(204).send(car);
}));


//GET by ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const car = api.getCar(id);

    if (car) {
        return res.status(200).send(car);
    }
    return res.status(404).send({ message: `unable to find car ${id}` });

});

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