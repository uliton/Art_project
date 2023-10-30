/// <reference types="react-scripts" />

interface Modal {
  login: string,
  register: string,
}

interface Data {
  id: number,
  image: string,
  title: string,
  artist: string,
  medium: string,
  price: number,
  size: string,
  year: number,
  colors: string,
  orientation: string,
}

interface ArtWork {
  id: number,
  title: string,
  artist: ArtistShort,
  image_url: string,
  description: string,
  price: string,
  color: string[],
  categories: number,
  year: number,
  likes: number,
}

interface User {
  fullname: string,
  email: string,
  password: string,
}

interface Artist {
  id: number,
  fullname: string,
  location: string,
  bio: string,
  phone: string,
  image: string,
  categories: string[],
  artworks: ArtWork[],
}

interface ArtistShort {
  id: number,
  fullname: string,
}
