import refs from './refs';

function makeRenderMarkup(hits) {
    
    const markup = hits.map(({ downloads, likes, views, comments, webformatURL, tags, largeImageURL }) => {

        return `<div class="photo-card">
                    <a href='${largeImageURL}'><img src=${webformatURL} alt="${tags}" loading="lazy"/></a>
                    <div class="info">
                        <p class="info-item">
                            <b>Likes </b>
                            <b class='info-item-text'>${likes}</b>
                        </p>
                        <p class="info-item">
                            <b>Views </b>
                            <b class='info-item-text'>${views}</b>
                        </p>
                        <p class="info-item">
                            <b>Comments </b>
                            <b class='info-item-text'>${comments}</b>
                         </p>
                        <p class="info-item">
                            <b>Downloads </b>
                            <b class='info-item-text'>${downloads}</b>
                        </p>
                    </div>
                </div>`
        }).join('');

    refs.divGallery.insertAdjacentHTML('beforeend', markup);
};

export default makeRenderMarkup;