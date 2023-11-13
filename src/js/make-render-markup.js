import Notiflix from "notiflix";
import refs from './refs';
import { makeFetchPixabay } from '../js/api-services';


function makeRenderMarkup(searchImage) {
    makeFetchPixabay(searchImage).then(({ hits }) => {
        if (hits.length === 0) {
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        }
        
        const markup = hits.map(({ downloads, likes, views, comments, previewURL, largeImageURL }) => {
            return `<img src=${previewURL} alt=${searchImage}>
                    <ul>
                        <li>Likes ${likes}</li>
                        <li>Views ${views}</li>
                        <li>Comments ${comments}</li>
                        <li>Downloads ${downloads}</li>
                    </ul>`
        }).join('');

        refs.divGallery.insertAdjacentHTML('beforeend', markup);
    });
};

export default makeRenderMarkup;