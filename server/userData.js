import UserModel from './api/users/userModel';

const users = [{
    "name": "Adam",
    "password": " password",
    "avatar":"https://ph-files.imgix.net/c495260b-6e2b-4987-b44e-a669dce024c6?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=221&h=221&fit=max",
    "regDate": "November 2019",
    "email": "peterson@gmail.com",
    "userRating": 5,
    "ownedCars": "57fa3b02-1777-11ea-8d71-362b9e155667"

},
{
    "name": "Paul",
    "password": " password1",
    "avatar": "http://petapixel.com/assets/uploads/2017/11/fake4.jpg",
    "regDate": "January 2019",
    "email": "Paul0518@yahoo.com",
    "userRating": 5,
    "ownedCars": "57fa3b03-1777-11ea-8d71-362b9e155667"

},
{
    "name": "Gregory",
    "password": " password2",
    "avatar": "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
    "regDate": "October 2019",
    "email": "GregoryDrew@gmail.com",
    "userRating": 5,
    "ownedCars": "57fa3b04-1777-11ea-8d71-362b9e155667"
}
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
