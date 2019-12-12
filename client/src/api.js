import axios from 'axios';

export const rateUser = userUID => {
  return axios.post(`/api/users/${userUID}/rateUser`)
    .then(resp => resp.data);
};

export const getAllCars = () => {
  return axios('/api/cars')
    .then(resp => resp.data);
};

export const getAllUsers = () => {
  return axios('/api/users')
    .then(resp => resp.data);
};

export const getCar = _id => {
  return axios.get(`/api/cars/${_id}`)
    .then(resp => resp.data);
};


export const getUser = _id => {
  return axios.get(`/api/users/${_id}`)
    .then(resp => resp.data);
};

export const addCar = (newType, newPicture, newBrand, newModel, newYear, newOwner, newPrice) => {
  return axios.post('/api/cars', { type: newType, picture: newPicture, brand: newBrand, model: newModel, year: newYear, owner: newOwner, price: newPrice })
    .then(resp => resp.data);
};
export const addUser = (newName, newPassword, newEmail, newAvatar, newRegDate, newUserRating, newOwnedCar) => {
  return axios.post('/api/users', { name: newName, password: newPassword, email: newEmail, avatar: newAvatar, regDate: newRegDate, userRating: newUserRating, ownedCar: newOwnedCar }).then(resp => resp.data);
};