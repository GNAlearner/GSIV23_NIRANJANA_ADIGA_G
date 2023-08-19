import React from 'react'

const MovieItem = (props) => {

    const { title, poster_path, vote_average, overview } = props;
    const Image = process.env.REACT_APP_IMG_BASE_URL;

    return (
        <div className="card">
            <img src={poster_path ? `${Image}${poster_path}` : '/default-img.png'} className="card-img-top" alt="card"></img>
            <div className="card-body">
                <span>
                    <b>{title.length < 20 ? title : `${title.slice(0, 19)}...`}</b>
                    <span className="ratings"> {`(${vote_average})`}</span>
                </span>
                <p>{overview.slice(0, 48)}...</p>
            </div>
        </div>
    )
}

export default MovieItem