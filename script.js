"use strict";
const wizCube = document.getElementById('wiz-cube');
const cryptoTrader = document.getElementById('clicker');
const atomSim = document.getElementById('plant-reminder');
const div = document.querySelectorAll('.vig');
const projectText = document.getElementById('projects');
const projectTitle = document.getElementById('project-title');
const menuWrap = document.getElementById('menu-wrap');
const doc = document.body;
const vignetteInn = () => {
    div.forEach((div) => {
        div.style.height = '25vh';
        div.style.backgroundColor = 'rgb(19,19,19)';
        document.body.style.height = '300vh';
        document.body.style.overflow = 'visible';
    });
};
const newWindow = (location) => {
    window.location.href = location;
};
const updateOpacity = () => {
    projectText.style.color = '1';
    menuWrap.style.opacity = '1';
};
wizCube.addEventListener('click', () => {
    menuWrap.style.opacity = '0';
    projectText.style.transition = '700ms';
    menuWrap.style.transition = '700ms';
    projectText.style.opacity = '0';
    setTimeout(newWindow, 700, 'wizCubePage.html');
    setTimeout(vignetteInn, 1);
    document.body.style.height = '300vh';
    document.body.style.overflow = 'visible';
});
cryptoTrader.addEventListener('click', () => {
    menuWrap.style.opacity = '0';
    projectText.style.transition = '700ms';
    menuWrap.style.transition = '700ms';
    projectText.style.opacity = '0';
    setTimeout(newWindow, 700, 'cryptoTrader.html');
    setTimeout(vignetteInn, 1);
    document.body.style.height = '300vh';
    document.body.style.overflow = 'visible';
});
atomSim.addEventListener('click', () => {
    menuWrap.style.opacity = '0';
    projectText.style.transition = '700ms';
    menuWrap.style.transition = '700ms';
    projectText.style.opacity = '0';
    setTimeout(newWindow, 700, 'AtomSim.html');
    setTimeout(vignetteInn, 1);
    document.body.style.height = '300vh';
    document.body.style.overflow = 'visible';
});
//# sourceMappingURL=script.js.map