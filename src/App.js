import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './App.css';
import Fetcher from './components/Fetcher';
import Hooks, {aFunc} from './components/Hooks';
import {Skeleton, Rating} from "@material-ui/lab";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
  
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

