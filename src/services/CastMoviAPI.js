function CastMoviAPI(movieId) {
  const key = '6c43de172bd11aba3555d5548a35dbd3';
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Ничего не найдено`));
  });
}

export default CastMoviAPI;
