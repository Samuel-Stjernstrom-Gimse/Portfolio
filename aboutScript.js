"use strict";
const menuWraps = document.getElementById('menu-wrap');
const abouts = document.getElementById('about-nav');
const projectss = document.getElementById('projects-nav');
const section = document.getElementById('section-1');
const newWindows = (location) => {
    window.location.href = location;
};
abouts.addEventListener('click', () => {
    setTimeout(newWindows, 0, 'about.html');
});
projectss.addEventListener('click', () => {
    setTimeout(newWindows, 0, 'index.html');
});
const socialss = document.getElementById('socials');
const logoss = document.getElementById('logosss');
let logosBools = false;
const mails = document.getElementById('mail');
const numberPhones = document.getElementById('numberPhone');
socialss.addEventListener('click', () => {
    numberPhones.style.visibility = 'visible';
    mails.style.visibility = 'visible';
    logosBools = !logosBools;
    logosBools ? (logoss.style.opacity = '1') : (logoss.style.opacity = '0');
    logosBools ? (logoss.style.visibility = 'visible') : (logoss.style.visibility = 'hidden');
});
//# sourceMappingURL=aboutScript.js.map