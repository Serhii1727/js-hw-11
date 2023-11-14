import axios from "axios";
import Notiflix from "notiflix";
import refs from "./js/refs";
import makeRenderMarkup from "./js/make-render-markup";
import createSearchQuery from "./js/create-search";
import clearGallery from "./js/clear-gallery";
import NewApiService from "./js/api-services";
import showMessage from "./js/show-message";

const newApiService = new NewApiService()

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearGallery();
    newApiService.resetPage();
    newApiService.query = createSearchQuery();
    
    newApiService.makeFetchPixabay().then(({ totalHits, hits }) => {
        
        if (hits.length === 0) {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            return;
        };

        if (totalHits <= 20) {
            makeRenderMarkup(hits);
            showMessage();
            return;
        };

        makeRenderMarkup(hits);
        newApiService.incrementPage()
        refs.buttonLoadMore.classList.remove('is-hidden')
    })
});

refs.buttonLoadMore.addEventListener('click', () => {
    
    newApiService.makeFetchPixabay().then(({ totalHits, hits }) => {
        console.log(hits.length);
        console.log(totalHits)
        if (hits.length < 20) {
            refs.buttonLoadMore.classList.add('is-hidden');
            showMessage();
        } else {
            makeRenderMarkup(hits);
        newApiService.incrementPage();
        }
        
    });
});
