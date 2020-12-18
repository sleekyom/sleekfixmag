import React, {useState} from 'react';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const [state, setState] = useState();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div>
    Home page
  </div>
  )
}

export default Home;