import {API_SEARCH, API_URL, IMG_URL} from "./constants";

const { REACT_APP_API_KEY } = process.env;

export const generateApiUrl = path => `${API_URL}${path}?api_key=${REACT_APP_API_KEY}&language=en-US`
export const generateSearchUrl = search => `${API_SEARCH}?api_key=${REACT_APP_API_KEY}&query=${search}`
export const generateImageUrl = (path, size) => `${IMG_URL}w${size}/${path}`
export const formatDate = (date) => {
    let release = new Date(date)
    return release.toLocaleDateString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric'
    }).replace(/ /g, ' ');
}
export const calculateRate = rate => Math.floor(rate*10)+'%';
