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

export const getCar = carUID => {
  return axios.get(`/api/cars/${carUID}`)
    .then(resp => resp.data);
};


export const getUser = userUID => {
  return axios.get(`/api/user/${userUID}`)
    .then(resp => resp.data);
};

export const addCar = (newUID, newType, newPicture, newBrand, newModel, newYear, newOwner, newPrice) => {
  return axios.post('/api/cars', { uid: newUID, type: newType, picture: newPicture, brand: newBrand, model: newModel, year: newYear, owner: newOwner, price: newPrice })
    .then(resp => resp.data);
};
export const addUser = (newName, newPassword, newRegDate, newEmail) => {
  return axios.post('/api/posts', { name: newName, password: newPassword, regDate: newRegDate, email: newEmail })
    .then(resp => resp.data);
};