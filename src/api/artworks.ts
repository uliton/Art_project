import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';

const config = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4NzY4MzIyLCJpYXQiOjE2OTg2ODE5MjIsImp0aSI6IjlmZDIyMTZjNzM0ODQ3ZWFhNWUyN2Q2NzlkZDE2NzdiIiwidXNlcl9pZCI6MX0.DA_LPOJoKMzOa9Dyw8AESPUUPo3wFWbmOnMvluOpQlc',
  }
}

export function getAllArtworks() {
  return axios.get(
    'gallery/artworks/',
    // config
  )
    .then(res=> res.data)
    .catch(err=> console.log(err))
};

export function addNewUser(artist: User) {
  return axios.post('user/register/', artist)
    .catch(err => err);
}

export function getUser() {
  return axios.get('user/me/',
  config
  )
    .catch(err => err);
}

export function test() {
  return axios.post('user/token/')
    .catch(err => err);
}
