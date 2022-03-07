import './App.css';
import React, { useEffect, useState } from "react";
import Reactor from './components/Reactors';

function App() {

  const [reactors, setReactors] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/reactors")
    .then(res => res.json())
    .then(data => setReactors(data))
  }, [])

  const handleChange = (event) => {
    if(event.target.value === 'foaming'){
      let foamingReactors = reactors.filter(
        (reactor) => reactor.foaming === true
      );
      setReactors(foamingReactors)
    }else{
      setReactors(reactors)
    }
  }

  return (
    <div className="App">
      <h2>Reactors</h2>
      <select onChange={(event) => handleChange(event)}>
        <option value="all">All</option>
        <option value="foaming">Foaming</option>
      </select>
      {reactors &&reactors.map((reactor) => (
            <Reactor
              reactor={reactor}
              key={reactor.id}
              reactors={reactors}
              setReactors={setReactors}
            />
          ))}
    </div>
  );
}

export default App;
