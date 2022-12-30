import React from "react";
import { Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom";
import axios from "axios";
export class Movie extends React.Component {
    constructor() {
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }
    DeleteBook(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }
    render() {
        return (
            <Row className="px-4 my-5">
                <Col sm={3} className="movie-image">
                    <img src={this.props.movie.coverImage}></img>
                </Col>
                <Col>
                    <br />
                    <h1>{this.props.movie.title}</h1>
                    <h3>Directed by: {this.props.movie.director}</h3>
                    <br />
                    <p>{this.props.movie.summary}</p>
                    <br />
                    <Link to={'/edit/' + this.props.movie._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>

                </Col>
            </Row>
        )
    }
}