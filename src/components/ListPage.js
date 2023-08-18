import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upcomingMovies } from '../state/action-creators';
import Spinner from './Spinner';

const ListPage = () => {
  const list = useSelector(state => state.list);
  const fetchData = useDispatch();
  const Image = process.env.REACT_APP_IMG_BASE_URL;

  useEffect(() => {
    fetchData(upcomingMovies());
  }, [])

  console.log(list);
  return (
    <div className="container-fluid mt-2">
      <div className="row row-cols-5">
        {list.loading ? <Spinner /> :
        list?.movies?.results?.map((curMovie) => (
          <div className="col-md-2" key={curMovie.id}>
            <div className="card mb-2">
              <img src={`${Image}${curMovie.poster_path}`} className="card-img-top" alt="Movie Image"></img>
              <div className="card-body">
                <b>{curMovie.title.length<17 ? curMovie.title : `${curMovie.title.slice(0,17)}...`}</b>
                <p>{curMovie.overview.slice(0,30)}...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListPage