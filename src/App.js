import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import styled from 'styled-components';



function App() {
      //variable//function
  const [nasa, setNasa] = useState({});

  useEffect(() => {//executes 2nd
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(response => {
    console.log(response);  
    setNasa(response.data);
    })
  }, [])

  const prettydate = styled.dateContainer`
    border: 2px dotted blue;
    padding : 

  `;


  return (//executes first
    <div className="App">
      <p className="dateContainer">
        {nasa.date}
      </p>
      <p className="exContainer">
        {nasa.explanation}
      </p>
      
      <img className="picBox" src={nasa.url}>
      </img>

    </div>
  );
}

export default App;

