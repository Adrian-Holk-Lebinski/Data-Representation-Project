import React from "react";
import axios from "axios";

import '../App.css';

export class Add extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onChangeMovieDirector = this.onChangeMovieDirector.bind(this);
        this.onChangeMovieReleaseYear = this.onChangeMovieReleaseYear.bind(this);
        this.onChangeMovieCoverImage = this.onChangeMovieCoverImage.bind(this);
        this.onChangeMovieSummary = this.onChangeMovieSummary.bind(this);

        this.state = {
            title: '',
            director: '',
            releaseYear: '',
            coverImage: '',
            summary: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Submitted 
        ${this.state.title},
        ${this.state.director},
        ${this.state.releaseYear},
        ${this.state.coverImage},
        ${this.state.summary}`);

        const movie = {
            title: this.state.title,
            director: this.state.director,
            releaseYear: this.state.releaseYear,
            coverImage: this.state.coverImage,
            summary: this.state.summary
        }

        axios.post('http://localhost:4000/api/movies', movie)
            .then()
            .catch();

        this.setState({
            title: '',
            director: '',
            releaseYear: '',
            coverImage: '',
            summary: ''
        })
    }
    onChangeMovieTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    onChangeMovieDirector(e) {
        this.setState({
            director: e.target.value
        })
    }
    onChangeMovieReleaseYear(e) {
        this.setState({
            releaseYear: e.target.value
        })
    }
    onChangeMovieCoverImage(e) {
        this.setState({
            coverImage: e.target.value
        })
    }
    onChangeMovieSummary(e) {
        this.setState({
            summary: e.target.value
        })
    }
    render() {
        return (
            <div className="formDiv">
                <form onSubmit={this.handleSubmit} class="form">

                    <h3 className="title">Add a movie to the database</h3>
                    <br />
                    <div className="input-container ic1">
                        <input className="input" type="text"
                            value={this.state.title}
                            onChange={this.onChangeMovieTitle}
                            placeholder=" "
                            required />
                        <div className="cut"></div>
                        <label className="placeholderCustom">Title</label>
                    </div>
                    <div className="input-container ic1">
                        <input className="input" type="text"
                            value={this.state.director}
                            onChange={this.onChangeMovieDirector}
                            placeholder=" "
                            required />
                        <div className="cut"></div>
                        <label className="placeholderCustom">Director</label>
                    </div>
                    <div className="input-container ic1">
                        <input className="input" type="text"
                            value={this.state.releaseYear}
                            onChange={this.onChangeMovieReleaseYear}
                            placeholder=" "
                            required />
                        <div className="cut"></div>
                        <label className="placeholderCustom">Release Year</label>
                    </div>
                    <div className="input-container ic1">
                        <input className="input" type="text"
                            value={this.state.coverImage}
                            onChange={this.onChangeMovieCoverImage}
                            placeholder=" "
                            required />
                        <div className="cut"></div>
                        <label className="placeholderCustom">Image URL</label>
                    </div>
                    <div className="input-container ic1 summaryDiv">
                        <textarea className="input" type="text"
                            value={this.state.summary}
                            onChange={this.onChangeMovieSummary}
                            placeholder=" "
                            required />
                        <div className="cut"></div>
                        <label className="placeholderCustom">Summary</label>
                    </div>
                    <input className="submit" type="submit" value="Submit Movie" />
                </form>
            </div>
        )
    }
}

export default Add;