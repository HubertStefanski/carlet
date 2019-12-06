class LocalCarCache {

    constructor() {
        this.cars = [] ;
    }

    getAll() {
        return this.cars ;
    }

    populate(cars) {
        this.cars = cars;
    }


}

export default (new LocalCarCache() );
