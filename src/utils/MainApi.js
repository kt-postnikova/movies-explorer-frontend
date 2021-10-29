const getResponse = response => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`)

const LOCAL_URL = 'http://localhost:3000';
// const PROD_URL = 'https://api.movie-explorer.nomoredomains.club/signup';

export const register = (email, password, name) => {
    return fetch(`${LOCAL_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
    })
        .then(getResponse)
};

export const authorize = (email, password) => {
    return fetch(`${LOCAL_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(getResponse)
}

export const getContent = () => {
    return fetch(`${LOCAL_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${JSON.parse(localStorage.getItem('token'))}`
        }
    })
        .then(getResponse)
}

export const editUserInfo = (userInfo) => {
    return fetch(`${LOCAL_URL}/users/me`, {
        method: 'PATCH',
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
    return fetch(`${LOCAL_URL}/movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${JSON.parse(localStorage.getItem('token'))}`
        },
    })
        .then(getResponse)
}

export const saveMovie = (movie) => {
    return fetch(`${LOCAL_URL}/movies`, {
        method: 'POST',
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
    return fetch(`${LOCAL_URL}/movies/${movieId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${JSON.parse(localStorage.getItem('token'))}`
        }
    })
        .then(getResponse)
}