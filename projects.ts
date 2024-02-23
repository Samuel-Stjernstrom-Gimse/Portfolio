const scrollArrow = document.getElementById('scroll-arrow') as HTMLImageElement

scrollArrow.addEventListener('click', () => {
	window.scroll(0, 700)
})
