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

  const PrettyDiv = styled.div`
    border: 5px dotted purple;
    color: gray;

  `;


  return (//executes first
    <PrettyDiv>
    <div className="App">
      <p>
        {nasa.date}
      </p>
      <p >
        {nasa.explanation}
      </p>
      
      <img src={nasa.url}>
      </img>
      </PrettyDiv>
    </div>
  );
}

export default App;

