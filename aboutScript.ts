const menuWraps = document.getElementById('menu-wrap') as HTMLDivElement
const abouts = document.getElementById('about-nav') as HTMLLIElement
const projectss = document.getElementById('projects-nav') as HTMLLIElement
const section = document.getElementById('section-1') as HTMLTableSectionElement
const newWindows = (location: string) => {
	window.location.href = location
}
abouts.addEventListener('click', () => {
	setTimeout(newWindows, 0, 'about.html')
})

projectss.addEventListener('click', () => {
	//add same for menu later

	setTimeout(newWindows, 0, 'index.html')
})
const socialss = document.getElementById('socials') as HTMLHeadingElement
const logoss = document.getElementById('logosss') as HTMLElement
let logosBools = false
const mails = document.getElementById('mail') as HTMLLIElement
const numberPhones = document.getElementById('numberPhone') as HTMLHeadingElement

socialss.addEventListener('click', () => {
	numberPhones.style.visibility = 'visible'
	mails.style.visibility = 'visible'
	logosBools = !logosBools
	logosBools ? (logoss.style.opacity = '1') : (logoss.style.opacity = '0')
	logosBools ? (logoss.style.visibility = 'visible') : (logoss.style.visibility = 'hidden')
})
