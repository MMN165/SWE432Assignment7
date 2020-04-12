import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './App.css';
import Fetcher from './components/Fetcher';
import Hooks, {aFunc} from './components/Hooks';
import {Skeleton, Rating} from "@material-ui/lab";

function App() {
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])

return (
  <div>
      <h1>SWE 432: Assignment 7</h1>
      <p>Partners: Megan Ngo and Thomas Rigger </p>
      <p>Please rate the following GMU buildings on a scale of 1 (worst) to 5 (best): </p>
      <p>Fenwick Library</p>
      <Rating name = "Fenwick Library" value={rating} size="large" defaultValue={0} precision={0.5} onChange={(e, value) => setRating(value)} />
      <p>Johnson Center</p>
      <Rating name = "Johnson Center" value={rating} precision={0.5} onChange={(e, value) => setRating(value)} />
      <p>Robinson Hall B</p>
      <Rating name = "Robinson Hall B" value={rating} precision={0.5} onChange={(e, value) => setRating(value)} />
      <p>Southside</p>
      <Rating name = "Southside" value={rating} precision={0.5} onChange={(e, value) => setRating(value)} />
      <p>Volgenau School of Engineering</p>
      <Rating name = "Volgenau School of Engineering" value={rating} precision={0.5} onChange={(e, value) => setRating(value)} />
      
    </div>
  );
}

export default App;

