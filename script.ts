const wizCube = document.getElementById('wiz-cube') as HTMLHeadingElement
const cryptoTrader = document.getElementById('clicker') as HTMLHeadingElement
const atomSim = document.getElementById('plant-reminder') as HTMLHeadingElement
const div: NodeListOf<HTMLDivElement> = document.querySelectorAll('.vig')
const projectText = document.getElementById('projects') as HTMLDivElement
const projectTitle = document.getElementById('project-title')
const menuWrap = document.getElementById('menu-wrap') as HTMLDivElement
const doc = document.body as HTMLElement
const background = document.getElementById('back-ground') as HTMLImageElement

const phoneNumber = document.getElementById('phonePic') as HTMLLIElement
const numberPhone = document.getElementById('numberPhone') as HTMLHeadingElement
let numberBool = false

const socials = document.getElementById('socials') as HTMLHeadingElement
const logos = document.getElementById('logosss') as HTMLElement
let logosBool = false

const vignetteInn = () => {
	div.forEach((div: HTMLDivElement): void => {
		div.style.height = '25vh'
		div.style.backgroundColor = 'rgb(11,11,11)'
		document.body.style.height = '300vh'
		document.body.style.overflow = 'visible'
	})
}
phoneNumber.addEventListener('click', () => {
	numberBool = !numberBool
	if (numberBool) {
		numberPhone.style.visibility = 'visible'
	} else {
		numberPhone.style.visibility = 'hidden'
	}
})

const email = document.getElementById('email') as HTMLLIElement
const mail = document.getElementById('mail') as HTMLHeadingElement
let mailBool = false
email.addEventListener('click', () => {
	mailBool = !mailBool
	if (mailBool) {
		mail.style.visibility = 'visible'
	} else {
		mail.style.visibility = 'hidden'
	}
})

const newWindow = (location: string) => {
	window.location.href = location
}
const updateOpacity = () => {
	projectText.style.color = '1'
	menuWrap.style.opacity = '1'
}

if (wizCube) {
	wizCube.addEventListener('click', () => {
		background.style.opacity = '0'
		menuWrap.style.opacity = '0'
		projectText.style.transition = '700ms'
		background.style.transition = '700ms'
		menuWrap.style.transition = '700ms'
		projectText.style.opacity = '0'
		//add same for menu later

		setTimeout(newWindow, 700, 'wizCubePage.html')
		setTimeout(vignetteInn, 1)

		document.body.style.height = '300vh'
		document.body.style.overflow = 'visible'
	})

	cryptoTrader.addEventListener('click', () => {
		background.style.opacity = '0'
		menuWrap.style.opacity = '0'
		projectText.style.transition = '700ms'
		background.style.transition = '700ms'
		menuWrap.style.transition = '700ms'
		projectText.style.opacity = '0'
		//add same for menu later

		setTimeout(newWindow, 700, 'cryptoTrader.html')
		setTimeout(vignetteInn, 1)

		document.body.style.height = '300vh'
		document.body.style.overflow = 'visible'
	})

	atomSim.addEventListener('click', () => {
		background.style.opacity = '0'
		menuWrap.style.opacity = '0'
		projectText.style.transition = '700ms'
		background.style.transition = '700ms'
		menuWrap.style.transition = '700ms'
		projectText.style.opacity = '0'
		//add same for menu later

		setTimeout(newWindow, 700, 'AtomSim.html')
		setTimeout(vignetteInn, 1)

		document.body.style.height = '300vh'
		document.body.style.overflow = 'visible'
	})
}

const about = document.getElementById('about-nav') as HTMLLIElement
const projects = document.getElementById('projects-nav') as HTMLLIElement
about.addEventListener('click', () => {
	setTimeout(newWindow, 0, 'about.html')
})

projects.addEventListener('click', () => {
	setTimeout(newWindow, 0, 'index.html')
})
socials.addEventListener('click', () => {
	numberPhone.style.visibility = 'visible'
	logosBool = !logosBool
	logosBool ? (logos.style.opacity = '1') : (logos.style.opacity = '0')
	logosBool ? (logos.style.visibility = 'visible') : (logos.style.visibility = 'hidden')
})
