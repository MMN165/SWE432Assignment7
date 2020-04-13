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

var FW;

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
       <FormLabel component="legend">Johnson Center</FormLabel>
      <Rating name = "Johnson Center" id="JC" JC={rating} precision={0.5} defaultValue={2.5} onChange={(e, JC) => setRating(JC)} />
     <p></p>
          <FormLabel component="legend">Fenwick Library</FormLabel>
    <Rating name = "Fenwick Library" id="FW" FW={rating} precision={0.5} defaultValue={2.5} onChange={(e, FW) => setRating(FW)} />
     <p></p>
        <FormLabel component="legend">Robinson Hall B</FormLabel>
      <Rating name = "Robinson Hall B" id="RHB" RHB={rating} precision={0.5} defaultValue={2.5} onChange={(e, RHB) => setRating(RHB)} />
    <p></p>
          <FormLabel component="legend">Southside</FormLabel>
      <Rating name = "Southside" id="SS" SS={rating} precision={0.5} defaultValue={2.5} onChange={(e, SS) => setRating(SS)} />
     <p></p>
          <FormLabel component="legend">Volgenau School of Engineering</FormLabel>
       <Rating name = "Volgenau School of Engineering" id="VSOE" VSOE={rating} precision={0.5} defaultValue={2.5} onChange={(e, VSOE) => setRating(VSOE)} />
<p></p><p></p><p></p>
        <button onclick="printValues()" id="printV">Submit</button> 
    <script>
    document.write("PRINT ANYTHING"); </script>
    <p></p>
      </div>
    </>
  );
}

function printValues() {
    // get the values
    var jc = document.getElementById('JC');
    var fw = document.getElementById('FW');
    var rb = document.getElementById('RHB');
    var ss = document.getElementById('SS');
    var vs = document.getElementById('VSOE');

    document.write(jc);
    document.write("PRINT ANYTHING");
    /*  // <Rating name = "Johnson Center" JC={rating} precision={0.5} onChange={(e, JC) => setRating(JC)} />
 // <Rating name = "Fenwick Library" id="FW" FW={rating} precision={0.5} onChange={(e, FW) => setRating(FW)} />
      // <Rating name = "Robinson Hall B" RHB={rating} precision={0.5} onChange={(e, RHB) => setRating(RHB)} />
      // <Rating name = "Southside" SS={rating} precision={0.5} onChange={(e, SS) => setRating(SS)} />
      // <Rating name = "Volgenau School of Engineering" VSOE={rating} precision={0.5} onChange={(e, VSOE) => setRating(VSOE)} />
     */
    
 /* //   <script>
   document.write(jc);
     document.write("TESTING"); */
    // </script> 
} 

export default App;

