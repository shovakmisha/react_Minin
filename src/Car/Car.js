import React from "react";

import './Car.css'

    const Car = (props) => {

        let classInput = (props.name.length) ? 'green' : 'red';

        return (

            <div className="Car">
                <h3>Car name: {props.name} </h3>
                <p>Year <strong>{props.year}</strong></p>
                <input onChange={props.onChangeName} value={props.name} className={`input ${classInput}`} />
                <button onClick={props.onDelete}>Delete</button>
            </div>
        )
    }

export default Car;