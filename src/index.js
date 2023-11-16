import axios from "axios";
import Notiflix from "notiflix";
import refs from "./js/refs";
import makeRenderMarkup from "./js/make-render-markup";
import createSearchQuery from "./js/create-search";
import clearGallery from "./js/clear-gallery";
import NewApiService from "./js/api-services";
import showMessage from "./js/show-message";


const newApiService = new NewApiService();
let totalImage = null;

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearGallery();
    newApiService.resetPage();
    newApiService.resetPerPage();
    newApiService.query = createSearchQuery();
    refs.buttonLoadMore.classList.add('is-hidden');

    
    newApiService.makeFetchPixabay().then(({ totalHits, hits }) => {

        newApiService.setTotal(totalHits);
        console.log(newApiService);
        
        if (hits.length === 0) {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            refs.buttonLoadMore.classList.add('is-hidden');
            return;
        };

        if (totalHits <= 40) {
            makeRenderMarkup(hits);
            showMessage();
            refs.buttonLoadMore.classList.add('is-hidden');
            return;
        };

        makeRenderMarkup(hits);
        newApiService.incrementPage();
        refs.buttonLoadMore.classList.remove('is-hidden');
        
    })
});

refs.buttonLoadMore.addEventListener('click', () => {
    newApiService.calcTotal()
    newApiService.setPerPage(newApiService.total);
    

    
    newApiService.makeFetchPixabay().then(({ totalHits, hits }) => {
        
        
        
        if (hits.length < 40 || newApiService.total < 0) {
            refs.buttonLoadMore.classList.add('is-hidden');
            makeRenderMarkup(hits);
            showMessage();
        }
        else {
            makeRenderMarkup(hits);
            newApiService.incrementPage();
            //newApiService.calcTotal()
        }
        console.log(newApiService)
        
    });
});
