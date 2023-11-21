import NewApiService from './api-services';
import Notiflix from 'notiflix';
import makeRenderMarkup from './make-render-markup';
import makeScroll from './make-scroll';
import refs from './refs';
import addSimpleLightbox from './simple-lightbox';
import showMessage from './show-message';
export const newApiService = new NewApiService();

export async function logicFirstSearch({ totalHits, hits }) {
        
    newApiService.setTotal(totalHits);

        if (hits.length === 0) {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            refs.buttonLoadMore.classList.add('is-hidden');
            return;
        };

        if (totalHits <= 40) {
            Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
            makeRenderMarkup(hits);
            makeScroll(0.23);
            addSimpleLightbox();
            showMessage();
            refs.buttonLoadMore.classList.add('is-hidden');
            return;
    };
    
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
        
        makeRenderMarkup(hits);
        makeScroll(0.23);
        addSimpleLightbox();
        newApiService.incrementPage();
        refs.buttonLoadMore.classList.remove('is-hidden');
};
    
export async function logicLoadMoreSearch({ hits }) {
    
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
    };
};