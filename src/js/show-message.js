import refs from "./refs";

function showMessage() {
    
        const message = `<p class='message'>We're sorry, but you've reached the end of search results.</p>`
        refs.body.insertAdjacentHTML('beforeend', message); 
    
}

export default showMessage;