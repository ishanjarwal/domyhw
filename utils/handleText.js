function handleText() {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page) => {
        const linesContainer = page.querySelector(".linesContainer");
        const textContainer = page.querySelector(".textContainer");
        const lineHeight = (linesContainer.clientHeight / 23);
        const fontSize = lineHeight / 1.2;
        document.body.style.fontSize = fontSize + "px";
        document.body.style.lineHeight = lineHeight + "px";
        textContainer.style.paddingTop = lineHeight / 6 + "px";
        // textContainer.style.paddingTop = "2px";
        textContainer.addEventListener('paste', (e) => {
            e.preventDefault();
            const text = e.clipboardData
                .getData('text/plain')
                .replace(/\n/g, '<br/>');
            document.execCommand('insertHTML', false, text);
        })
    })
}
window.addEventListener('resize', () => {
    handleText();
})
window.addEventListener('load', () => {
    handleText();
})