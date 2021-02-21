export const getEpisodes = () => {
    const URI = "https://rickandmortyapi.com/api/episode"
    return fetch(URI)
    .then(res => res.json())
}

export const getCharacters = () => {
    const URI = "https://rickandmortyapi.com/api/character"
    return fetch(URI)
    .then(res => res.json())
}

export const getLocations = () => {
    const URI = "https://rickandmortyapi.com/api/location"
    return fetch(URI)
    .then(res => res.json())
}