import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Rating} from "@material-ui/lab";

import './App.css';
import Fetcher from './components/Fetcher';
import Hooks, {aFunc} from './components/Hooks';
import {Skeleton, Rating} from "@material-ui/lab";

function App() {
    
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(3);
  
  const [value, setValue] = React.useState('freshman');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])

  return (
    <>
     <div>
      <h1>SWE 432: Assignment 7</h1>
      <p>Partners: Megan Ngo and Thomas Rigger </p>
      </div>
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="schoolYear" name="year1" value={value} onChange={handleChange}>
        <FormControlLabel value="freshman" control={<Radio />} label="Freshman" />
        <FormControlLabel value="sophomore" control={<Radio />} label="Sophomore" />
        <FormControlLabel value="junior" control={<Radio />} label="Junior" />
        <FormControlLabel value="senior" control={<Radio />} label="Senior" />
      </RadioGroup>
    </FormControl> 
    <div>
    <p>Please rate the following GMU buildings on a scale of 1 (worst) to 5 (best): </p>
      <p>Fenwick Library</p>
    <Rating name = "Fenwick Library" value={rating} size="large" defaultValue={0} precision={0.5} onChange={(e, value) => setRating(value)} />
      <p>Johnson Center</p>
      <Rating name = "Johnson Center" value={rating} size="large" precision={0.5} onChange={(e, value) => setRating(value)} />
      <p>Robinson Hall B</p>
      <Rating name = "Robinson Hall B" value={rating} size="large" precision={0.5} onChange={(e, value) => setRating(value)} />
      <p>Southside</p>
      <Rating name = "Southside" value={rating} size="large" precision={0.5} onChange={(e, value) => setRating(value)} />
      <p>Volgenau School of Engineering</p>
      <Rating name = "Volgenau School of Engineering" value={rating} size="large" precision={0.5} onChange={(e, value) => setRating(value)} />
      
      </div>
    </>
  );
}

export default App;

