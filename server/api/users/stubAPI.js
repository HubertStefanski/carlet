import _ from 'lodash';

const users = [
    {
        uid: "7a13db52-176e-11ea-8d71-362b9e155667",
        name: "Adam",
        password: " password",
        avatar: null,
        regDate: "November 2019",
        email: "lorem@ipsum.dol",
        userRating: 5
    },
    {
        uid: "7ab6da93-176e-11ea-8d71-362b9e155667",
        name: "Paul",
        password: " password",
        avatar: null,
        regDate: "January 2019",
        email: "lorem@ipsum.dol",
        userRating: 5
    },
    {
        uid: "7a2qjg12-176e-11ea-8d71-362b9e155667",
        name: "Gregory",
        password: " password",
        avatar: null,
        regDate: "October 2019",
        email: "lorem@ipsum.dol",
        userRating: 5
    },
    {
        uid: "7a134252-176e-11ea-8d71-362b9e155667",
        name: "Josh",
        password: " password",
        avatar: null,
        regDate: "November 2019",
        email: "lorem@ipsum.dol",
        userRating: 5
    },
    {
        uid: "724db52-176e-11ea-8d71-362b9e155667",
        name: "Jake",
        password: " password",
        avatar: null,
        regDate: "March 2019",
        email: "lorem@ipsum.dol",
        userRating: 5
    },
    {
        uid: "7a13ag52-176e-11ea-8d71-362b9e155667",
        name: "John",
        password: " password",
        avatar: null,
        regDate: "November 2019",
        email: "lorem@ipsum.dol",
        userRating: 5
    },
    {
        uid: "7a1dlb52-176e-11ea-8d71-362b9e155667",
        name: "Kevin",
        password: " password",
        avatar: null,
        regDate: "December 2019",
        email: "lorem@ipsum.dol",
        userRating: 5
    },
    {
        uid: "9113db52-176e-11ea-8d71-362b9e155667",
        name: "Rick",
        password: " password",
        avatar: null,
        regDate: "January 2019",
        email: "lorem@ipsum.dol",
        userRating: 5
    },
    {
        uid: "0193db52-176e-11ea-8d71-362b9e155667",
        name: "Evan",
        password: " password",
        avatar: null,
        regDate: "May 2019",
        email: "lorem@ipsum.dol",
        userRating: 5
    },
    {
        uid: "9sk1db52-176e-11ea-8d71-362b9e155667",
        name: "Daniel",
        password: " password",
        avatar: null,
        regDate: "July 2019",
        email: "lorem@ipsum.dol",
        userRating: 5
    },
    {
        uid: "kau2db52-176e-11ea-8d71-362b9e155667",
        name: "Conroy",
        password: " password",
        avatar: null,
        regDate: "June 2019",
        email: "lorem@ipsum.dol",
        userRating: 5
    },
];

var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();


const stubAPI = {
    getAllUsers: () => {
        return users;
    },
    addUser: (name, password, email) => {
        if (!(name && password && email)) return false;
        let uid = 1;
        const last = _.last(users);
        if (last) {
            uid = last.uid + 1;
        }
        let len = users.length;
        let newLen = posts.push({
            'uid': uid,
            'name': name, 'password': password, 'avatar': '', 'regDate': month + ' ' + year, 'email': email
        });
        return newLen > len ? uid : -1;
    },
    getUser: (uid) => {
        let result = null;
        const index = _.findIndex(user,
            (user) => {
                return user.uid == uid;
            });
        if (index !== -1) {
            result = user[index];
        }
        return result;
    },
    rateUser: (uid) => {
        const index = _.findIndex(user,
            (user) => {
                return user.uid == uid;
            });
        if (index !== -1) {
            user[index].userRating += 1;
            return true;
        }
        return false;
    },
};
export default stubAPI;