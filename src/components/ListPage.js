import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upcomingMovies, searchMovies } from '../state/action-creators';
import Spinner from './Spinner';
import { NavLink } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component'
import MovieItem from './MovieItem';

const ListPage = () => {

  const list = useSelector(state => state.list);
  const keyword = list?.movies?.keyword;
  const page = list?.movies?.page;
  const dispatch = useDispatch();

  //On Mounting fetch the upcoming movies and show
  useEffect(() => {
    dispatch(upcomingMovies(1));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //While scrolling it will fetch more data and show
  const fetchMoreData = () => {
    if (keyword === "") {
      //if scrolling of upcoming movies
      dispatch(upcomingMovies(page + 1));
    } else {
      //if scrolling of searched movies
      dispatch(searchMovies(keyword, page + 1));
    }
  }

  return (
    <>
      {list.loading ? <Spinner/> :
      list.movies.results && <InfiniteScroll
        dataLength={list.movies.results.length}
        next={fetchMoreData}
        hasMore={list.movies.results.length !== list.movies.total_results}
        loader={<Spinner />}
      >
        <div className="container-fluid mt-2">
          <div className="row">
            {list?.movies?.results?.map((curMovie) => {
              return (
                //Component on clicking will change from List Page to Detail Page
                <NavLink
                  to={`details/${curMovie.id}`} className="col-cards mb-2" key={curMovie.id}
                >
                  <MovieItem
                    title={curMovie.title}
                    poster_path={curMovie.poster_path}
                    vote_average={curMovie.vote_average}
                    overview={curMovie.overview} />
                </NavLink>
              )
            })}
          </div>
        </div>
      </InfiniteScroll >}
    </>
  )
}

export default ListPage