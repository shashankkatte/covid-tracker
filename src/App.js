import React from 'react';
import {
  MenuItem,
  FormControl,
  Select
} from '@material-ui/core';
import './App.css';


function App() {
  return (
    <div className="app">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select
          variant = "outlined"
          value ="abc"
        >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="Canada">Canada</MenuItem>
          <MenuItem value="India">India</MenuItem>
        </Select>
      </FormControl>
      {/*Header*/}
      {/* Title + Select input dropdown */}

      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

       {/* Table */}
       {/* Graph */}

       {/* Map */}

    </div>
  );
}

export default App;
