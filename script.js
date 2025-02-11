const modalController = ({ modal, btnOpen, btnClose }) => {
	const buttonElements = document.querySelectorAll(btnOpen)
	const modalElement = document.querySelector(modal)

	modalElement.style.cssText = `
	display: flex;
	visibility: hidden;
	opacity: 0;
	transition: opacity 300ms easy-in-out;`

	const closeModal = event => {
		const target = event.target

		if (target === modalElement || target.closest(btnClose)) {
			modalElement.style.visibility = 'hidden'
			modalElement.style.opacity = 0
			document.body.style.overflow = 'auto'

			setTimeout(() => {
				modalElement.style.visibility = 'hidden'
			}, 300)
		}
	}

	const openModal = () => {
		modalElement.style.visibility = 'visible'
		modalElement.style.opacity = 1
		document.body.style.overflow = 'hidden'
	}

	buttonElements.forEach(btn => {
		btn.addEventListener('click', openModal)
	})

	modalElement.addEventListener('click', closeModal)
}

modalController({
	modal: '.modal1',
	btnOpen: '.item-about_button1',
	btnClose: '.modal__close1',
})

modalController({
	modal: '.modal2',
	btnOpen: '.item-about_button2',
	btnClose: '.modal__close2',
})

modalController({
	modal: '.modal3',
	btnOpen: '.item-about_button3',
	btnClose: '.modal__close3',
})

// BURGER MENU START
const hamburger = document.querySelector('.hamburger')
const navHeader = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active')
	navHeader.classList.toggle('active')
})

navHeader.addEventListener('click', function (event) {
	if (event.target.classList.contains('my-link')) {
		hamburger.classList.remove('active')
		navHeader.classList.remove('active')
	}
})
// BURGER MENU END

// SMOOTH SCROLl START
// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
// 	anchor.addEventListener('click', function (event) {
// 		event.preventDefault()
// 		const blokID = anchor.getAttribute('href')
// 		document
// 			.querySelector('' + blokID)
// 			.scrollIntoView({ behavior: 'smooth', block: 'start' })
// 	})
// }
// SMOOTH SCROLL END
