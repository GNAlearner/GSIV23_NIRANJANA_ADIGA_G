import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { movieDetail } from '../state/action-creators';

const DetailsPage = () => {

  //Use the id from URL
  const { id } = useParams();
  const { details } = useSelector(state => state.details);
  const dispatch = useDispatch();
  //Image URL which is stored in .env file
  const Image = process.env.REACT_APP_IMG_BASE_URL;

  //Onmounting fetch the details of current movie
  useEffect(() => {
    dispatch(movieDetail(id));
  }, [])

  return (
    <div className="card details-page">
      <div className="row no-gutters">
        <div className="col-md-3">
          <img src={details.poster_path ? `${Image}${details.poster_path}` : '/default-img.png'} className="details-img" alt="detail" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <b className="card-title">{details.title}</b>
            <span>{` (${details.vote_average})`}</span>
            <div className="card-text">
              {details.release_date?.slice(0, 4)} | 0{Math.floor(details.runtime / 60)} : {details.runtime % 60}
            </div>
            <p className="card-text">{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage;