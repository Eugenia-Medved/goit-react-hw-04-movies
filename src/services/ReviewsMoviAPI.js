function ReviewsMoviAPI(movieId) {
  const key = '6c43de172bd11aba3555d5548a35dbd3';
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Ничего не найдено`));
  });
}

export default ReviewsMoviAPI;
