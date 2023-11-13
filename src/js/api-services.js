const KEY_PIXABAY = "25836176-b4d66cb7105f8e07a6b55e563";
const BASE_URL = 'https://pixabay.com/api/';

export function makeFetchPixabay(searchImage) {
    return fetch(`${BASE_URL}?key=${KEY_PIXABAY}&q=${searchImage}&image_type=photo&orientation="horizontal"&safesearch=true"`).then((response) => {return response.json()})
};
