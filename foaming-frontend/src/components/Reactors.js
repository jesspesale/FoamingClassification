import "./images.css";
import React, {useState} from "react"

export default function Reactor({ reactor, reactors, setReactors}) {


  const handleClick = (reactor) => {
    fetch(`http://localhost:3000/reactors/${reactor.id}`, {
      method: "PUT",
      body: JSON.stringify({
        foaming: !reactor.foaming,
        tagged: !reactor.tagged,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(reactor => setReactors([...reactors, reactor]))
  };


  return (
    <div>
      <div>
        <img src={reactor.url} className="image" />
        <div className="foaming">
          <input type="checkbox" defaultChecked={reactor.foaming} onClick={() => handleClick(reactor)} />
          <p>Foaming</p>
        </div>
      </div>
    </div>
  );
}
