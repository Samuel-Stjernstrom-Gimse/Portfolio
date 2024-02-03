"use strict";
const wizCube = document.getElementById('wiz-cube');
const div = document.querySelectorAll('.vig');
const projectText = document.getElementById('projects');
const projectTitle = document.getElementById('project-title');
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
wizCube.addEventListener('click', () => {
    projectText.style.color = 'black';
    setTimeout(newWindow, 1, 'wizCubePage.html');
    setTimeout(vignetteInn, 700);
    document.body.style.height = '300vh';
    document.body.style.overflow = 'visible';
});
//# sourceMappingURL=script.js.map