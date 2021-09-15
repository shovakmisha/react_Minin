import React from "react";

    // function Car() {
    //     return (
    //         <h2>This is car component</h2>
    //     )
    // }

    // const Car = () => {
    //     return (
    //         <h2>This is car component</h2>
    //     )
    // }

    const Car = (props) => (
        <div>
            <hr/>
            This is car component  {1 + 1}
            <h3>Car name: {props.name} </h3>
            <p>Year <strong>{props.year}</strong></p>
            {props.children}
        </div>
    )

export default Car;