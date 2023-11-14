import refs from "./refs";

function showMessage() {
    
        const message = `We're sorry, but you've reached the end of search results.`
        refs.divGallery.insertAdjacentHTML('beforeend', message); 
    
}

export default showMessage;