import React from "react";

    const Car = (props) => (
        <div>
            <hr/>
            <h3>Car name: {props.name} </h3>
            <p>Year <strong>{props.year}</strong></p>
            <input onChange={props.onChangeName} value={props.name} />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )

export default Car;