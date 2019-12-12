import carModel from './api//cars/carModel';

const cars = [{

    "type": "SEDAN",
    "picture": "https://autoblog-img.vast.com/5095911717663169990/6/r/690x-", 
    "brand": "BMW",
    "model": "M4",
    "year": 2019,
    "owner": "Paul",
    "price": 50
},
{
    "type": "SUV",
    "picture": "https://i.pinimg.com/originals/7d/16/7b/7d167b6f79e01b4c88b31b3ece446853.jpg",
    "brand": "MERCEDES-BENZ",
    "model": "G",
    "year": 2016,
    "owner": "Gregory",
    "price": 300
},
{
    "type": "HATCHBACK",
    "picture": "http://cloud.leparking.fr/2018/12/13/00/09/ford-fiesta-ford-fiesta-aubergine-2010-mauve_6589280563.jpg",
    "brand": "FORD",
    "model": "FIESTA",
    "year": 2010,
    "owner": "Adam",
    "price": 50
},{
    "type": "SEDAN",
    "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRP9naotWxbEvJcplV8RRuHlXKXNUQhyH1qx9f_-MLdzV-J5Wki",
    "brand": "VW",
    "model": "PASSAT",
    "year": 2014,
    "owner": "Adam",
    "price": 65
},{
    "type": "HATCHBACK",
    "picture": "https://cnet1.cbsistatic.com/img/P82n3Ph2D1Fbcdx7k9rWcerc45w=/868x488/2011/08/26/c0533127-bb76-11e2-8a8e-0291187978f3/34864831_OVR.JPG",
    "brand": "HONDA",
    "model": "CIVIC",
    "year": 2012,
    "owner": "Gregory",
    "price": 45
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