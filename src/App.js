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

    onDelete (index)  {
        let cars = [...this.state.cars]; // клоную масив

        cars = cars.slice(index, 1);

        this.setState({
            cars
        });
    }

    onChangeName = (event, index) => {

        let cars = this.state.cars.concat(); // concat() тому що в ыдеалы щоб скопыювати масив, треба його клонувати, а не просто занести в іншу змінну

        // Можна ще так склонувати
        // let cars = [...this.state.cars]

        cars[index].name = event.target.value;

        this.setState({
            cars // по новому синтаксису js
        });
    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    }

    render() {

        return (
            <div className="App" style={ {color: 'blue', fontSize: '20px'} }>
                <h1>{this.state.pageTitle}</h1>

                <button onClick={this.toggleCarsHandler}>Toggle cars</button>

                <div style={{
                    width: 400,
                    margin: '20px auto 0'
                }}>
                    {
                        (this.state.showCars) ?
                            this.state.cars.map((car, index) => {
                                return (
                                    <Car
                                        key={index}
                                        name={car.name}
                                        year={car.year}
                                        onChangeName={event => this.onChangeName(event, index)}
                                        onDelete={this.onDelete.bind(this, index)}
                                    />
                                )
                            })
                            :
                            false
                    }
                </div>

            </div>
        );
    }
}

export default App;
