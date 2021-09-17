import './App.css';
import React, {Component} from "react";

import Car from "./Car/Car";

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016}
        ],
        pageTitle: 'React components',
        showCars: false
    }

    changeTitleHandler = (newTitle = 'Default') => {

        this.setState({
            pageTitle: newTitle
        });
    }

    handleInput = (event) => {
        // console.log(event.target.value);
        this.setState({
            pageTitle: event.target.value
        })
    }

    render() {

        const cars = this.state.cars;

        return (
            <div className="App" style={ {color: 'blue', fontSize: '20px'} }>
                <h1>{this.state.pageTitle}</h1>

                <input onChange={this.handleInput} type="text"/>

                <button
                    onClick={this.changeTitleHandler.bind(this, 'new Changed')}
                >Change title</button>

                {this.state.cars.map((car, index) => {
                    return (
                        <Car
                            key={index}
                            name={car.name}
                            year={car.year}
                            onChangeTitle={() => this.changeTitleHandler.bind(this, car.name)}
                        />
                    )
                })}
            </div>
        );
    }
}

export default App;
