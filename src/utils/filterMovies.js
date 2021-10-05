export const filterMovies = (moviesArray, query) => {
    const filteredMovies = moviesArray.filter((movie) => {
        return movie.description.toLowerCase().includes(query)
    })
    return filteredMovies
}