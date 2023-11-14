import refs from "./refs";

function onClickButtonLoadMore() {
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
};

export default onClickButtonLoadMore;