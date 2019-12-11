import UserModel from './api/users/userModel';

const users = [{
    "name": "Adam",
    "password": " password",
    "avatar": null,
    "regDate": "November 2019",
    "email": "lorem@ipsum.dol",
    "userRating": 5,
    "ownedCars": {
        "carUID": "57fa3b02-1777-11ea-8d71-362b9e155667"
    }
},
{
    "name": "Paul",
    "password": " password1",
    "avatar": null,
    "regDate": "January 2019",
    "email": "lorem1@ipsum.dol",
    "userRating": 5,
    "ownedCars": {
        "carUID": "57fa3b03-1777-11ea-8d71-362b9e155667"
    }
},
{
    "name": "Gregory",
    "password": " password2",
    "avatar": null,
    "regDate": "October 2019",
    "email": "lorem2@ipsum.dol",
    "userRating": 5,
    "ownedCars": {
        "carUID": "57fa3b04-1777-11ea-8d71-362b9e155667"
    }
},
];

export default async function loadUsers() {
    try {
        await UserModel.deleteMany(),
            await UserModel.collection.insertMany(users);
        console.info(`${users.length} users passed to database successfully`);
    } catch (err) {
        console.error(`failed to load user Data ${err}`);
    }
}
