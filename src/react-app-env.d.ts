/// <reference types="react-scripts" />

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
  artist: number,
  image_url: string,
  description: string,
}
