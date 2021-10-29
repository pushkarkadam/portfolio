document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', processScroll);
})

let processScroll = () => {
    let docElem = document.documentElement;
    let docBody = document.body;
    let scrollTop = docElem['scrollTop'] || docBody['scrollTop'];
    let scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight;
    let scrollPercent = scrollTop / scrollBottom * 100 + '%';

    document.querySelector("#progress-bar").style.setProperty('--scrollAmount', scrollPercent);
}
