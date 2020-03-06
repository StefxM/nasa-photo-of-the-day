import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
      //variable//function
  const [nasa, setNasa] = useState({});

  useEffect(() => {//executes 2nd
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(response => {
    console.log(response);  
    setNasa(response.data);
    })
  }, [])
  return (//executes first
    <div className="App">
      <p>
        {nasa.date}
      </p>
      <p>
        {nasa.explanation}
      </p>

      <img src={nasa.url}>
      </img>
    </div>
  );
}

export default App;

