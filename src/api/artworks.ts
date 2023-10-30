import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';

const config = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4NjY0ODQ4LCJpYXQiOjE2OTg1Nzg0NDgsImp0aSI6ImU0NDZkMjVhMDNiYTQyZjc5YTNlZmY0ZjZiZDg1NzhmIiwidXNlcl9pZCI6MX0.H5yMi0NLosTNS19IsheihtjlmG84jAKKrKirUgKz3k8',
  }
}

export function getAllArtworks() {
  return axios.get(
    'gallery/artworks/',
    config
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
