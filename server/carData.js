import carModel from './api//cars/carModel';

const cars = [{

    "type": "SEDAN",
    "picture": "stories/stock.png",
    "brand": "BMW",
    "model": "M4",
    "year": 2019,
    "owner": "jimsbiscuits",
    "price": 50
},
{
    "type": "SUV",
    "picture": "stories/stock.png",
    "brand": "MERCEDES-BENZ",
    "model": "G",
    "year": 2016,
    "owner": "cargoman",
    "price": 300
},
{
    "type": "HATCHBACK",
    "picture": "stories/stock.png",
    "brand": "FORD",
    "model": "FIESTA",
    "year": 2010,
    "owner": "feistyfiesta",
    "price": 50
}
];

export default async function loadCars(){
    try {
        await carModel.deleteMany();
        await carModel.collection.insertMany(cars);
        console.info(`${cars.length} cars passed to database successfully`);
    }catch(err){
        console.error(`failed to load Car data: ${err}`);
    }
}