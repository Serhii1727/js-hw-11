
import refs from './refs';


function makeRenderMarkup(hits) {
    
        
        
    const markup = hits.map(({ downloads, likes, views, comments, previewURL, tags, largeImageURL }) => {
        const description = (`${tags}`).split(' ').join('-');
        
        return `<div class="photo-card">
                    <img src=${previewURL} alt=${description} loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                            <b>Likes ${likes}</b>
                        </p>
                        <p class="info-item">
                            <b>Views ${views}</b>
                        </p>
                        <p class="info-item">
                            <b>Comments ${comments}</b>
                         </p>
                        <p class="info-item">
                            <b>Downloads ${downloads}</b>
                        </p>
                    </div>
                </div>`
        }).join('');

    refs.divGallery.insertAdjacentHTML('beforeend', markup);
    
};

export default makeRenderMarkup;