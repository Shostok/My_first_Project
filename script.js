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

// let position = 0
// const slidesToShow = 1
// const slidesToScroll = 1
// const container = document.querySelector('.slider-container')
// const track = document.querySelector('.slider-track')
// const btnPrev = document.querySelector('.arrow_slider_left')
// const btnNext = document.querySelector('.arrow_slider_right')
// const items = document.querySelectorAll('.pet-info_column')
// const itemsCount = items.length

// items.forEach(item => {
// 	item.style.minWidth = `${itemWidth}px`
// })

// btnNext.addEventListener('click', () => {
// 	const itemsLeft =
// 		itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
// 	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
// 	setPosition()
// 	checkBtns()
// })

// btnPrev.addEventListener('click', () => {
// 	const itemsLeft = Math.abs(position) / itemWidth
// 	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
// 	setPosition()
// 	checkBtns()
// })

// const setPosition = () => {
// 	track.style.transform = `translateX(${position}px)`
// }

// const checkBtns = () => {
// 	btnPrev.disabled = position === 0
// 	btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
// }

// setItemsWidth()
// checkBtns()

const container = document.querySelector('.slider-container')
const track = document.querySelector('.slider-track')
const arrowLeft = document.querySelector('.arrow_slider_left')
const arrowRight = document.querySelector('.arrow_slider_right')
const slides = document.querySelectorAll('.pet-info_column')

let currentSlideIndex = 0

function showSlide() {
	slides[currentSlideIndex].classList.add('block')
}

function hideSlide() {
	slides[currentSlideIndex].classList.remove('block')
}

function nextSlide() {
	hideSlide()
	currentSlideIndex++
	if (currentSlideIndex > slides.length - 1) {
		currentSlideIndex = 0
	}
	showSlide()
}

function previousSlide() {
	hideSlide()
	currentSlideIndex--
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length - 1
	}
	showSlide()
}

showSlide()

arrowRight.addEventListener('click', nextSlide)
arrowLeft.addEventListener('click', previousSlide)
