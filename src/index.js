import axios from "axios";
import Notiflix from "notiflix";
import refs from "./js/refs";
import makeRenderMarkup from "./js/make-render-markup";
import createSearchQuery from "./js/create-search";
import clearGallery from "./js/clear-gallery";
import NewApiService from "./js/api-services";
import showMessage from "./js/show-message";
import addSimpleLightbox from './js/simple-lightbox';
import makeScroll from "./js/make-scroll";

const newApiService = new NewApiService();

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearGallery();
    newApiService.resetPage();
    newApiService.resetPerPage();
    newApiService.query = createSearchQuery();
    refs.buttonLoadMore.classList.add('is-hidden');

    if(event.target.elements.searchQuery.value === '') {
        Notiflix.Notify.warning('Please enter a search query');
        return;
    }

    newApiService.makeFetchPixabay().then(({ totalHits, hits }) => {

        newApiService.setTotal(totalHits);

        if (hits.length === 0) {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            refs.buttonLoadMore.classList.add('is-hidden');
            return;
        };

        if (totalHits <= 40) {
            Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
            makeRenderMarkup(hits);
            makeScroll(1 / 4);
            addSimpleLightbox();
            showMessage();
            refs.buttonLoadMore.classList.add('is-hidden');
            return;
        };
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
        
        makeRenderMarkup(hits);
        makeScroll(1 / 4);
        addSimpleLightbox();
        newApiService.incrementPage();
        refs.buttonLoadMore.classList.remove('is-hidden');

    })
});

refs.buttonLoadMore.addEventListener('click', () => {
    newApiService.calcTotal()
    newApiService.setPerPage(newApiService.total);
    
    newApiService.makeFetchPixabay().then(({ hits }) => {

        
        if (hits.length < 40 || newApiService.total < 0) {
            refs.buttonLoadMore.classList.add('is-hidden');
            makeRenderMarkup(hits);
            makeScroll(2.26);
            addSimpleLightbox();
            showMessage();
        }
        else {
            makeRenderMarkup(hits);
            makeScroll(2.26);
            addSimpleLightbox();
            newApiService.incrementPage();
            
            
        }
    });
});
