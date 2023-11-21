import Notiflix from "notiflix";
import refs from "./js/refs";
import { logicFirstSearch, logicLoadMoreSearch, newApiService } from "./js/logic-search";
import createSearchQuery from "./js/create-search";
import clearGallery from "./js/clear-gallery";

refs.form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearGallery();
    newApiService.resetPage();
    newApiService.resetPerPage();
    newApiService.query = createSearchQuery();
    refs.buttonLoadMore.classList.add('is-hidden');

    if(event.target.elements.searchQuery.value === '') {
        Notiflix.Notify.warning('Please enter a search query');
        return;
    };

    try {
        const data = await newApiService.makeFetchPixabay();
        const renderImages = await logicFirstSearch(data);
        
    } catch (error) {
        console.log(error)
    };
});

refs.buttonLoadMore.addEventListener('click', async () => {
    newApiService.calcTotal();
    newApiService.setPerPage(newApiService.total);

    try {
        const data = await newApiService.makeFetchPixabay();
        const renderImage = await logicLoadMoreSearch(data);

    } catch (error) {
       console.log(error) 
    };
     
});
