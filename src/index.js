import axios from "axios";
import refs from "./js/refs";
import makeRenderMarkup from "./js/make-render-markup";
import createSearchQuery from "./js/create-search";
import clearGallery from "./js/clear-gallery";

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearGallery()

    const searchImage = createSearchQuery();

    makeRenderMarkup(searchImage);
});
