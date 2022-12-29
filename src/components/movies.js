import React from "react";
import { Movie } from "./movie";

export class Movies extends React.Component {
    render() {
        return this.props.movies.map(
            (movie) => {
                return <Movie movie={movie} key={movie._id} Reload={this.props.Reload}></Movie>
            }
        )
    }

}

export default Movies;