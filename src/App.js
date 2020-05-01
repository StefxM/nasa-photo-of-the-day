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

  const BackgroundDiv = styled.div`
    color: white;
    border: 5px dotted #61dafb;
    padding: 2%;
    display: flex;
  `;

  const ImgP = styled.img`
    width: 50%;
    height: 60%;
    padding: 2%;
  `;

  const PaddingP = styled.p`
    padding: 2%;
    color: #e600e6;
  `;

  return (//executes first
    
    <BackgroundDiv>
      <div>
      <h1>{nasa.title}</h1>
      <h2>{nasa.date}</h2>
      </div>
     
      <PaddingP>
        {nasa.explanation}
      </PaddingP>
      
      <ImgP src={nasa.url} alt='nasas pic'>
      </ImgP>
     
      </BackgroundDiv>
  );
}

export default App;

