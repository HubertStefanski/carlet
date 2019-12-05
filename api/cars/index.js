import express from 'express';
import { cars } from './cars';

const router = express.Router();
router.get('/', (req, res) => {
    res.send({ cars: cars });
});

export default router;