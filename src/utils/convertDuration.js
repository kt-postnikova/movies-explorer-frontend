export const convertDuration = (movie) => {
    const hours = Math.floor(movie.duration / 60)
    const minutes = movie.duration % 60
    return `${hours}ч ${minutes}мин`;
}