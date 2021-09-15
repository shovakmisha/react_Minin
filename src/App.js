import './App.css';
import React, {Component} from "react";

import Car from "./Car/Car";

class App extends Component {



    render() {

        return (
            <div className="App" style={ {color: 'blue', fontSize: '20px'} }>
                <h1>Hello World</h1>

                <Car name={'Ford'} year={2018}/>
                <Car name='Audi' year={2016}>
                    <p style={{color: 'red'}}>color</p>
                </Car>
            </div>
        );

        // Це еквівалент.
        // return React.createElement(
        //     'div',
        //     {className: 'App'},
        //     React.createElement('h1', null, 'Hello World')
        // )
    }
}

export default App;
