import axios from "axios";

class NewApiService {
    constructor() {
        this.searchImage = ''
        this.page = 1;
        this.total = null;
        this.perPage = 40;
    }

    async makeFetchPixabay() {
        const KEY_PIXABAY = "25836176-b4d66cb7105f8e07a6b55e563";
        const BASE_URL = 'https://pixabay.com/api/';

        const response = await axios.get(`${BASE_URL}?key=${KEY_PIXABAY}&q=${this.searchImage}&image_type=photo&orientation="horizontal"&safesearch=true&page=${this.page}&per_page=${this.perPage}`);
        const responseData = await response.data;
        return responseData;
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

    setTotal(newTotal) {
        this.total = newTotal;
    }

    calcTotal() {
        this.total -= 40;
    }

    setPerPage(newPerPage) {
        if (newPerPage !== 40 && newPerPage < 40) {
            this.perPage = newPerPage;
        }
    }

    resetPerPage() {
        this.perPage = 40;
    }
}

export default NewApiService;

