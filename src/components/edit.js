import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Edit(){
    let {id} = useParams();
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [summary, setSummary] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4000/api/movies/'+id)
        .then((response)=>{
            setTitle(response.data.title);
            setDirector(response.data.director);
            setReleaseYear(response.data.releaseYear);
            setCoverImage(response.data.coverImage);
            setSummary(response.data.summary);
        })
        .catch()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const editBook = {
            title:title,
            director:director,
            releaseYear:releaseYear,
            coverImage:coverImage,
            summary:summary
        }

        axios.put('http://localhost:4000/api/movies/'+id,editBook)
        .then((res) => {
            console.log(res.data);
            navigate('/');
        })
        .catch();

    }

    return(
        <div className="formDiv"> 
            <form onSubmit={handleSubmit} class="form">

                    <h3 className="title">Edit Movie {title}</h3>
                    <br />
                    <div className="input-container ic1">
                        <input className="input" type="text"
                            value={title}
                            placeholder=" "
                            required 
                            onChange={(e)=>{setTitle(e.target.value)}}/>
                        <div className="cut"></div>
                        <label className="placeholderCustom">Title</label>
                    </div>
                    <div className="input-container ic1">
                        <input className="input" type="text"
                            value={director}
                            placeholder=" "
                            required 
                            onChange={(e)=>{setDirector(e.target.value)}}/>
                        <div className="cut"></div>
                        <label className="placeholderCustom">Director</label>
                    </div>
                    <div className="input-container ic1">
                        <input className="input" type="text"
                            value={releaseYear}
                            placeholder=" "
                            required 
                            onChange={(e)=>{setReleaseYear(e.target.value)}}/>
                        <div className="cut"></div>
                        <label className="placeholderCustom">Release Year</label>
                    </div>
                    <div className="input-container ic1">
                        <input className="input" type="text"
                            value={coverImage}
                            placeholder=" "
                            required 
                            onChange={(e)=>{setCoverImage(e.target.value)}}/>
                        <div className="cut"></div>
                        <label className="placeholderCustom">Image URL</label>
                    </div>
                    <div className="input-container ic1 summaryDiv">
                        <textarea className="input" type="text"
                            value={summary}
                            placeholder=" "
                            required 
                            onChange={(e)=>{setSummary(e.target.value)}}/>
                        <div className="cut"></div>
                        <label className="placeholderCustom">Summary</label>
                    </div>
                    <input className="submit" type="submit" value="Submit Movie" />
                </form>
        </div>
    );
}