import _ from 'lodash';

const cars = [
    {
        uid: 1,
        type: "SEDAN",
        picture: "stories/stock.png",
        brand: "BMW",
        model: "M4",
        year: "2019",
        owner: "jimsbiscuits",
        price: "50"
    },
    {
        uid: 2,
        type: "SUV",
        picture: "stories/stock.png",
        brand: "MERCEDES-BENZ",
        model: "G",
        year: "2016",
        owner: "cargoman",
        price: "300"
    },
    {
        uid: 2,
        type: "HATCHBACK",
        picture: "stories/stock.png",
        brand: "FORD",
        model: "FIESTA",
        year: "2010",
        owner: "feistyfiesta",
        price: "50"
    },
    {
        uid: 3,
        type: "VAN",
        picture: "stories/stock.png",
        brand: "FIAT",
        model: "DUCATO",
        year: "2014",
        owner: "jimsbiscuits",
        price: "100"
    },
    {
        uid: 4,
        type: "ESTATE",
        picture: "stories/stock.png",
        brand: "MERCEDES-BENZ",
        model: "E300",
        year: "2014",
        owner: "caramelo",
        price: "150"
    },
    {
        uid: 5,
        type: "SEDAN",
        picture: "stories/stock.png",
        brand: "AUDI",
        model: "A4",
        year: "2011",
        owner: "arnold",
        price: "70"
    },
    {
        uid: 6,
        type: "COUPE",
        picture: "stories/stock.png",
        brand: "MERCEDES-BENZ",
        model: "AMG GT",
        year: "2019",
        owner: "grandtourer",
        price: "1000"
    },
    {
        uid: 7,
        type: "SUV",
        picture: "stories/stock.png",
        brand: "MERCEDES-BENZ",
        model: "G",
        year: "2016",
        owner: "cargoman",
        price: "300"
    },
    {
        uid: 8,
        type: "HATCHBACK",
        picture: "stories/stock.png",
        brand: "FORD",
        model: "FIESTA",
        year: "2010",
        owner: "feistyfiesta",
        price: "50"
    },
    {
        uid: 9,
        type: "VAN",
        picture: "stories/stock.png",
        brand: "FIAT",
        model: "DUCATO",
        year: "2014",
        owner: "jimsbiscuits",
        price: "100"
    },
    {
        uid: 10,
        type: "ESTATE",
        picture: "stories/stock.png",
        brand: "MERCEDES-BENZ",
        model: "E300",
        year: "2014",
        owner: "caramelo",
        price: "150"
    },
    {
        uid: 11,
        type: "SEDAN",
        picture: "stories/stock.png",
        brand: "AUDI",
        model: "A4",
        year: "2011",
        owner: "arnold",
        price: "70"
    },
    {
        uid: 12,
        type: "COUPE",
        picture: "stories/stock.png",
        brand: "MERCEDES-BENZ",
        model: "AMG GT",
        year: "2019",
        owner: "grandtourer",
        price: "1000"
    },
    {
        uid: 13,
        type: "SUV",
        picture: "stories/stock.png",
        brand: "MERCEDES-BENZ",
        model: "G",
        year: "2016",
        owner: "cargoman",
        price: "300"
    },
    {
        uid: 14,
        type: "HATCHBACK",
        picture: "stories/stock.png",
        brand: "FORD",
        model: "FIESTA",
        year: "2010",
        owner: "feistyfiesta",
        price: "50"
    },
    {
        uid: 15,
        type: "VAN",
        picture: "stories/stock.png",
        brand: "FIAT",
        model: "DUCATO",
        year: "2014",
        owner: "jimsbiscuits",
        price: "100"
    },
    {
        uid: 16,
        type: "ESTATE",
        picture: "stories/stock.png",
        brand: "MERCEDES-BENZ",
        model: "E300",
        year: "2014",
        owner: "caramelo",
        price: "150"
    },
    {
        uid: 17,
        type: "SEDAN",
        picture: "stories/stock.png",
        brand: "AUDI",
        model: "A4",
        year: "2011",
        owner: "arnold",
        price: "70"
    },
    {
        uid: 18,
        type: "COUPE",
        picture: "stories/stock.png",
        brand: "MERCEDES-BENZ",
        model: "AMG GT",
        year: "2019",
        owner: "grandtourer",
        price: "1000"
    },
];


const stubAPI = {
    getAllCars: () => {
        return cars;
    },
    addCar: (type, brand, model, year, price) => {
        if (!(type && brand && model && year && price)) return false;
        let uid = 1;
        const last = _.last(cars);
        if (last) {
            uid = last.uid + 1;
        }
        let len = cars.length;
        let newLen = cars.push({
            'uid': uid,
            'type': type, 'brand': brand, 'model': model, 'year': year, 'price': price
        });
        return newLen > len ? uid : -1;
    },
    getCar: (uid) => {
        let result = null;
        const index = _.findIndex(cars,
            (car) => {
                return car.uid == uid;
            });
        if (index !== -1) {
            result = cars[index];
        }
        return result;
    },
};
export default stubAPI;