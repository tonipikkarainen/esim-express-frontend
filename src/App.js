import './App.css';
import React, {useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const host = process.env.REACT_APP_API_URI;

  const getResponse = (id) => {
    fetch(host + "api/" + id)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      console.log(data);
      setBackendData(data)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test + {backendData.message}
        </p>
        <button onClick={()=> getResponse("grget")}>Paina tästä</button>
      </header>
    </div>
  );
}

export default App;
