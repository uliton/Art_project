import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';

const config = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3NzkxOTg3LCJpYXQiOjE2OTc3MDU1ODcsImp0aSI6ImZiMjMyYzI4NThkMzQxNWNiZjJiNTlmYTBkYTRhMjliIiwidXNlcl9pZCI6MX0.dGDFTgQg9xPUfQPIsduKHM3SPW7byTJMk_nmyCOq9YQ',
  }
}

export function getAllArtists() {
  return axios.get(
    'gallery/artists/',
    // config
  )
    .then(res=> res.data)
    .catch(err=> console.log(err))
};
