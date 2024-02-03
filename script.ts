const wizCube = document.getElementById('wiz-cube') as HTMLHeadingElement
const div: NodeListOf<HTMLDivElement> = document.querySelectorAll('.vig')
const projectText = document.getElementById('projects') as HTMLDivElement
const projectTitle = document.getElementById('project-title')

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
wizCube.addEventListener('click', () => {
	projectText.style.color = 'black'

	setTimeout(newWindow, 1, 'wizCubePage.html')
	setTimeout(vignetteInn, 700)

	document.body.style.height = '300vh'
	document.body.style.overflow = 'visible'
})
