const menuWraps = document.getElementById('menu-wrap') as HTMLDivElement
const abouts = document.getElementById('about-nav') as HTMLLIElement
const projectss = document.getElementById('projects-nav') as HTMLLIElement
const section = document.getElementById('section-1') as HTMLTableSectionElement
const newWindows = (location: string) => {
	window.location.href = location
}
abouts.addEventListener('click', () => {
	menuWrap.style.opacity = '0'
	menuWraps.style.transition = '700ms'
	section.style.opacity = '0'
	section.style.transition = '700ms'

	//add same for menu later

	setTimeout(newWindows, 700, 'about.html')
})

projectss.addEventListener('click', () => {
	menuWrap.style.opacity = '0'
	menuWrap.style.transition = '700ms'
	section.style.opacity = '0'
	section.style.transition = '700ms'

	//add same for menu later

	setTimeout(newWindows, 700, 'index.html')
})
