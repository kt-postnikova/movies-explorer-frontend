export const filterMovies = (moviesArray, query, isShortMovie) => {
    const filteredMovies = moviesArray.filter((movie) => {
        return movie.description.toLowerCase().includes(query)
    })
    if (isShortMovie) {
        return filteredMovies.filter((movie) => movie.duration < 100)
    }
    return filteredMovies;
}