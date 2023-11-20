function makeScroll(number) {
    const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * number,
  behavior: "smooth",
});
}

export default makeScroll;