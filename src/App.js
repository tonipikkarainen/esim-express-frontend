import './App.css';
import React, {useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([{}]);

  const getResponse = (id) => {
    fetch("/api/" + id)
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