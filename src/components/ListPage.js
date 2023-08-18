import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upcomingMovies, movieDetail } from '../state/action-creators';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';


const ListPage = () => {
  const list = useSelector(state => state.list);
  const movieToShow = useDispatch();
  const fetchData = useDispatch();
  const Navigate = useNavigate();
  const Image = process.env.REACT_APP_IMG_BASE_URL;

  useEffect(() => {
    fetchData(upcomingMovies());
  }, [])

  const showDetails = (id) => {
    movieToShow(movieDetail(id));
    Navigate("/details");
  }

  return (
    <div className="container-fluid mt-2">
      <div className="row row-cols-5">
        {list.loading ? <Spinner /> :
        list?.movies?.results?.map((curMovie) => (
          <div className="col-md-2" key={curMovie.id}>
            <div className="card mb-2" style={{cursor: "pointer"}} onClick={()=> {showDetails(curMovie.id)}}>
              <img src={`${Image}${curMovie.poster_path}`} className="card-img-top" alt="Movie Image"></img>
              <div className="card-body">
                <span>
                  <b>{curMovie.title.length<14 ? curMovie.title : `${curMovie.title.slice(0,13)}...`}</b>
                  <span className="ratings"> {`(${curMovie.vote_average})`}</span>
                </span>
                <p>{curMovie.overview.slice(0,32)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListPage