class LocalUserCache {

    constructor() {
        this.users = [] ;
    }

    getAll() {
        return this.users ;
    }

    populate(users) {
        this.users = users;
    }

}

export default (new LocalUserCache() );
