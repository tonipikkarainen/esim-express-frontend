import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
    const [backendData, setBackendData] = useState([{}]);
    const [input, setInput] = useState("");
    const host = process.env.REACT_APP_API_URI;

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        if (input !== "") getResponse(input);
    };

    const getResponse = (id) => {
        fetch(host + "api/" + id)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                console.log(data);
                setBackendData(data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="App">
            <div className="formFields">
                <header className="App-header">
                    <p>{backendData.message}</p>
                </header>
                <form onSubmit={handleSubmit}>
                    <label>
                        Arvaa numero väliltä 0 - 9:
                        <input value={input} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Lähetä" />
                </form>
            </div>
        </div>
    );
}

export default App;
