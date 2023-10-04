import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/gallery/';
// axios.defaults.headers = {
//   header1: 'Access-Control-Allow-Origin',
//   header2: '*',
// };

const config = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2MzQxMDM0LCJpYXQiOjE2OTYyNTQ2MzQsImp0aSI6ImZmZDkxZTMyN2QwYjRlYzdhYWJjMmM1ZjAyMzVmMGZhIiwidXNlcl9pZCI6MX0.-NQVd0dr4g9Cfi7h6xxmz68WPDQalz7IgjL-qDaay7I',
  }
}

export function getAllArtworks() {
  return axios.get('artworks/', config)
    .then(res=> res.data)
    .catch(err=> console.log(err))
};
