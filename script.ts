const wizCube = document.getElementById('wiz-cube') as HTMLHeadingElement
const div: NodeListOf<HTMLDivElement> = document.querySelectorAll('.vig')
const projectText = document.getElementById('projects') as HTMLDivElement
const projectTitle = document.getElementById('project-title')
const menuWrap = document.getElementById('menu-wrap') as HTMLDivElement
const doc = document.body as HTMLElement

const vignetteInn = () => {
	div.forEach((div: HTMLDivElement) => {
		div.style.height = '25vh'
		div.style.backgroundColor = 'rgb(19,19,19)'
		document.body.style.height = '300vh'
		document.body.style.overflow = 'visible'
	})
}
const newWindow = (location: string) => {
	window.location.href = location
}
const updateOpacity = () => {
	projectText.style.color = '1'
	menuWrap.style.opacity = '1'
}

wizCube.addEventListener('click', () => {
	menuWrap.style.opacity = '0'
	projectText.style.transition = '700ms'
	menuWrap.style.transition = '700ms'
	projectText.style.opacity = '0'
	//add same for menu later

	setTimeout(newWindow, 700, 'wizCubePage.html')
	setTimeout(vignetteInn, 1)

	document.body.style.height = '300vh'
	document.body.style.overflow = 'visible'
})
