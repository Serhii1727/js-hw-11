import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function addSimpleLightbox() {
     var lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    
     });
    lightbox.refresh()
}

export default addSimpleLightbox;