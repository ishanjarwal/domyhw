const pages = document.querySelectorAll('.page');
function handleLines() {
    pages.forEach((page) => {
        const linesContainer = page.querySelector(".linesContainer");
        const lineHeight = (linesContainer.clientHeight / 23);
        linesContainer.style.backgroundImage = `linear-gradient(transparent 96%, #999 4%)`
        linesContainer.style.backgroundSize = `100% ${lineHeight}px`;
    })
}
window.addEventListener('resize', (params) => {
    handleLines();
})
window.addEventListener('load', (params) => {
    handleLines();
})