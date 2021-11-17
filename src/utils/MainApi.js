const getResponse = response => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)

// const LOCAL_URL = 'http://localhost:3000';
const PROD_URL = 'https://api.movie-explorer.nomoredomains.rocks';

export const register = (email, password, name) => {
    return fetch(`${PROD_URL}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
    })
        .then(getResponse)
};

export const authorize = (email, password) => {
    return fetch(`${PROD_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(getResponse)
}

export const getContent = () => {
    return fetch(`${PROD_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${JSON.parse(localStorage.getItem('token'))}`
        }
    })
        .then(getResponse)
}

export const editUserInfo = (userInfo) => {
    return fetch(`${PROD_URL}/users/me`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `${JSON.parse(localStorage.getItem('token'))}`
        },
        body: JSON.stringify({
            email: userInfo.email,
            name: userInfo.name,
        })
    })
        .then(getResponse)
}

export const getSavedMovies = () => {
    return fetch(`${PROD_URL}/movies`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${JSON.parse(localStorage.getItem('token'))}`
        },
    })
        .then(getResponse)
}

export const saveMovie = (movie) => {
    return fetch(`${PROD_URL}/movies`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${JSON.parse(localStorage.getItem('token'))}`
        },
        body: JSON.stringify({
            country: movie.country || 'Неизвестно',
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `${'https://api.nomoreparties.co' + movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `${'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url}`,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
            id: movie.id,
        })
    })
        .then(getResponse)
}

export const deleteMovie = (movieId) => {
    return fetch(`${PROD_URL}/movies/${movieId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${JSON.parse(localStorage.getItem('token'))}`
        }
    })
        .then(getResponse)
}