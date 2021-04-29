const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const request = (endPoint) => {
  return fetch(`${BASE_URL}/${endPoint}`)
    .then(respone => respone.json())
};

export const getUsers = (endPoint) => {
  return request(endPoint);
}

export const getPost = (endPoint) => {
  return request(endPoint);
}

export const getComments = (endPoint) => {
  return request(endPoint);
}