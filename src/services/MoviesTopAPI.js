function MoviesTopAPI() {
  const key = '6c43de172bd11aba3555d5548a35dbd3';
  return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Ничего не найдено`));
  });
}

export default MoviesTopAPI;
