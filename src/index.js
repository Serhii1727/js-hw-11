import axios from "axios";
import Notiflix from "notiflix";
import refs from "./js/refs";
import { makeFetchPixabay } from "./js/api-services";

function createSearchQuery() {
    return refs.form[0].value;
};

function makeRenderMarkup(searchImage) {
    makeFetchPixabay(searchImage).then(({ hits }) => {
        
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
    
refs.form.addEventListener('submit', (event) => {
    event.preventDefault();

    const searchImage = createSearchQuery();
    makeRenderMarkup(searchImage);
});
