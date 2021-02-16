import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import MoviesDetailsAPI from '../../services/MoviesDetailsAPI';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import s from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    posterPath: null,
    title: null,
    overview: null,
    userScore: null,
    genres: null,
    date: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    MoviesDetailsAPI(movieId).then(data =>
      this.setState({
        posterPath: data.poster_path,
        title: data.title,
        overview: data.overview,
        userScore: data.vote_average,
        genres: data.genres,
        date: data.release_date,
      }),
    );
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push('/movies');
  };

  render() {
    const { posterPath, title, overview, userScore, genres, date } = this.state;
    const posterURL = `https://image.tmdb.org/t/p/w400${posterPath}`;
    const year = new Date(date).getFullYear();
    const { url, path } = this.props.match;

    return (
      <>
        <button type="button" className={s.btn} onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={s.container}>
          <div className={s.imgConainer}>
            <img src={posterURL} alt={title} />
          </div>

          <div className={s.infocontainer}>
            <h2>
              {title} <span>&#40;</span>
              {year}
              <span>&#41;</span>
            </h2>
            <p className={s.text}>User score: {userScore * 10}%</p>
            <h3>Overview</h3>
            <p className={s.text}>{overview}</p>
            <h3>Genres</h3>

            {genres &&
              genres.map(genre => (
                <p className={s.textGenre} key={genre.id}>
                  {genre.name}
                </p>
              ))}
          </div>
        </div>

        <h3>Additional information</h3>
        <div className={s.container}>
          <NavLink exact to={`${url}/cast`} className={s.NavLink} activeClassName={s.NavLinkActive}>
            Cast
          </NavLink>

          <NavLink
            exact
            to={`${url}/reviews`}
            className={s.NavLink}
            activeClassName={s.NavLinkActive}
          >
            Reviews
          </NavLink>
        </div>
        <Switch>
          <Route path={`${path}/cast`} component={Cast} />
          <Route path={`${path}/reviews`} component={Reviews} />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
