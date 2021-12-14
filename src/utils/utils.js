export const convertDuration = (movie) => {
    const hours = Math.floor(movie.duration / 60)
    const minutes = movie.duration % 60
    return `${hours}ч ${minutes}мин`;
}

export const filterMovies = (moviesArray, query, isShortMovie) => {
    const filteredMovies = moviesArray.filter((movie) => {
        const nameRU = String(movie.nameRU).toLowerCase().trim();
        const nameEN = String(movie.nameEN).toLowerCase().trim();
        const userMovie = query.toLowerCase().trim();
        return nameRU.indexOf(userMovie) !== -1 || nameEN.indexOf(userMovie) !== -1;
    })
    // if (isShortMovie) {
    //     return filteredMovies.filter((movie) => movie.duration < 40)
    // }
    return filteredMovies;
}

export const filterMoviesByDuration = (filtredMovies) => {
    return filtredMovies.filter((movie) => movie.duration < 40)
}

export const screenSizes = {
    large: {
        width: 1220,
        cards: {
            onPage: 12,
            perPage: 4
        }
    },
    medium: {
        width: 960,
        cards: {
            onPage: 9,
            perPage: 3
        }
    },
    small: {
        width: 600,
        cards: {
            onPage: 6,
            perPage: 2,
        }
    },
    extra: {
        cards: {
            onPage: 4,
            perPage: 2
        }
    }
}