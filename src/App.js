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
// import {Skeleton, Rating} from "@material-ui/lab";

function App() {
    
  const [loading, setLoading] = useState(true);
  const [rating, setRating, FW, JC, RHB, SS, VSOE] = useState(3);
  
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
      <FormLabel component="legend">School Year</FormLabel>
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
      <Rating name = "Fenwick Library" FW={rating} precision={0.5} onChange={(e, FW) => setRating(FW)} />
      <p>Johnson Center</p>
      <Rating name = "Johnson Center" JC={rating} precision={0.5} onChange={(e, JC) => setRating(JC)} />
      <p>Robinson Hall B</p>
      <Rating name = "Robinson Hall B" RHB={rating} precision={0.5} onChange={(e, RHB) => setRating(RHB)} />
      <p>Southside</p>
      <Rating name = "Southside" SS={rating} precision={0.5} onChange={(e, SS) => setRating(SS)} />
      <p>Volgenau School of Engineering</p>
      <Rating name = "Volgenau School of Engineering" VSOE={rating} precision={0.5} onChange={(e, VSOE) => setRating(VSOE)} />
      <p>Results: 
       Fenwick Library:                {FW} 
       Johnson Center:                 {JC} 
       Robinson Hall B:                {RHB} 
       South Side:                     {SS} 
       Volgenau School of Engineering: {VSOE}</p>
      </div>
    </>
  );
}

export default App;

