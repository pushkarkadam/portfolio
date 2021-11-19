document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', processScroll);

    const paragraphs = document.querySelectorAll("p");
    const readTimeDiv = document.querySelector("#read-time");

    calculateReadTime(paragraphs, readTimeDiv);
})

let processScroll = () => {
    let docElem = document.documentElement;
    let docBody = document.body;
    let scrollTop = docElem['scrollTop'] || docBody['scrollTop'];
    let scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight;
    let scrollPercent = scrollTop / scrollBottom * 100 + '%';

    document.querySelector("#progress-bar").style.setProperty('--scrollAmount', scrollPercent);
}

// Calculate read time
const calculateReadTime = (paragraphs, readTimeDiv) => {
    let numberOfWords = 0;

    // Average adult reading speed is around 200 to 250 words per minute
    const averageWPM = 250;

    paragraphs.forEach(paragraph => {
        numberOfWords += paragraph.innerHTML.split(" ").length;
    });

    let readTime = numberOfWords / averageWPM;

    readTimeDiv.innerHTML = Math.round(readTime) + " min read";
};
