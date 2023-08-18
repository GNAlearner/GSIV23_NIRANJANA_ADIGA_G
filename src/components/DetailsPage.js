import React from 'react'
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const { details } = useSelector(state => state.details);
  const Image = process.env.REACT_APP_IMG_BASE_URL;

  return (
    <div className="card details-page">
      <div className="row no-gutters">
        <div className="col-md-3">
          <img src={`${Image}${details.poster_path}`} className="details-img" alt="Image" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <b className="card-title">{details.title}</b>
            <span>{` (${details.vote_average})`}</span>
            <div className="card-text">
              {details.release_date?.slice(0,4)} | 0{Math.floor(details.runtime / 60)} : {details.runtime % 60}
              </div>
            <p className="card-text">{details.overview}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DetailsPage