import React from "react";
import { Row, Col } from "react-bootstrap"
export class Movie extends React.Component {
    constructor() {
        super();
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
                    <br />
                    <p>{this.props.movie.summary}</p>
                </Col>
            </Row>
        )
    }
}