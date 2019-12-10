import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './api/users';
import carsRouter from './api/cars';
import './db';
import loadUsers from './userData';
import loadCars from './carData';


dotenv.config();


const app = express();

const port = process.env.PORT;


if(process.env.seedDb){
  loadUsers();
  loadCars();
}

app.use(express.static('../client/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/users', usersRouter);
app.use('/api/cars', carsRouter);

app.get('client/src/index.js', (req, res) => {
  res.send({ express: 'Express established connection with React' });
});

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});