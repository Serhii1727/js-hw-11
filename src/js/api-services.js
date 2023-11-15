class NewApiService {
    constructor() {
        this.searchImage = ''
        this.page = 1;
    }

    makeFetchPixabay() {
    const KEY_PIXABAY = "25836176-b4d66cb7105f8e07a6b55e563";
    const BASE_URL = 'https://pixabay.com/api/';
    return fetch(`${BASE_URL}?key=${KEY_PIXABAY}&q=${this.searchImage}&image_type=photo&orientation="horizontal"&safesearch=true&page=${this.page}&per_page=40`).then((response) => {return response.json()})
};
    get query() {
        return this.query;
    }
    
    set query(newQuery) {
        this.searchImage = newQuery;
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
}

export default NewApiService;

