"use strict";
const menuWraps = document.getElementById('menu-wrap');
const abouts = document.getElementById('about-nav');
const projectss = document.getElementById('projects-nav');
const section = document.getElementById('section-1');
const newWindows = (location) => {
    window.location.href = location;
};
abouts.addEventListener('click', () => {
    menuWrap.style.opacity = '0';
    menuWraps.style.transition = '700ms';
    section.style.opacity = '0';
    section.style.transition = '700ms';
    setTimeout(newWindows, 700, 'about.html');
});
projectss.addEventListener('click', () => {
    menuWrap.style.opacity = '0';
    menuWrap.style.transition = '700ms';
    section.style.opacity = '0';
    section.style.transition = '700ms';
    setTimeout(newWindows, 700, 'index.html');
});
//# sourceMappingURL=aboutScript.js.map