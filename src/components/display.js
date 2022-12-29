import React from "react";
import axios from "axios";
import { Movies } from "./movies";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Display extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    state = {
        movies: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                this.setState({ movies: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                    <Movies movies={this.state.movies} Reload={this.componentDidMount}></Movies>
            </div>

        )
    }
}