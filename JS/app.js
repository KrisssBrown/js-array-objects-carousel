// let images = [
// 	'./IMG/1065466.png',
// 	'./IMG/1124739.jpg',
// 	'./IMG/885371.jpg',
// 	'./IMG/885991.jpg',
// 	'./IMG/ellie-the-last-of-us-part-2-uhdpaper.com-hd-5.2478.jpg',
//     './IMG/the_last_of_us_ps3_game-wide.jpg',
// ]

let currentIndex = 0

// // RECUPERIAMO DAL DOM IL carousel DOVE INSERIRE LE SLIDES
// const carousel = document.querySelector('.carousel')
// console.log(carousel)

// for (let i = 0; i < images.length; i++) {
// 	const srcImage = images[i]
// 	console.log(srcImage)

// 	let className = 'slide'
// 	if (i === currentIndex) {
// 		className += ' active'
// 	}

// 	const htmlSlide = `
//     <div class="${className}">
//       <img src="${srcImage}" alt="">
//     </div>
//   `

// 	carousel.innerHTML += htmlSlide
// }

// RECUPERATO LE SLIDE DEL carousel
let slideElements = document.querySelectorAll('.carousel .slide')
// slideElements = [...slideElements]
console.log(slideElements)

// RECUPERATO I DUE CONTROLLI
const arrowLeftElement = document.getElementById('carousel-left-arrow')
const arrowRightElement = document.getElementById('carousel-right-arrow')

console.log(arrowLeftElement, arrowRightElement)

// slideElements[currentIndex].classList.add('active')

//AGGANCIAMO GLI EVENT LISTENER AI CONTROLLI
arrowLeftElement.addEventListener('click', function () {
	console.log('prev slide')

	//nascondere la slide attiva
	console.log(slideElements[currentIndex])
	slideElements[currentIndex].classList.remove('active')

	if (currentIndex > 0) {
		currentIndex--
	} else {
		currentIndex = slideElements.length - 1 //last index
	}

	// mostrare la slide precedente
	console.log(slideElements[currentIndex])
	slideElements[currentIndex].classList.add('active')
	// aggiornare il currentIndex
})

arrowRightElement.addEventListener('click', function () {
	console.log('next slide')
	console.log(currentIndex)

	const lastIndex = slideElements.length - 1

	// if (currentIndex < lastIndex) {
	// nascondere la slide attiva
	console.log(slideElements[currentIndex])
	slideElements[currentIndex].classList.remove('active')

	if (currentIndex < lastIndex) {
		currentIndex += 1
	} else {
		currentIndex = 0
	}

	// mostrare la slide successiva
	console.log(slideElements[currentIndex])
	slideElements[currentIndex].classList.add('active')

	// aggiornare il currentIndex

	// }
})













































// // // // // let indiceSlideAttiva = 0
// // // // // // let clickCounter = 0
// // // // // const slideElements = document.getElementsByClassName('slide')



// // // // // const leftBtnEl = document.querySelector('.arrow.carousel-left-arrow')
// // // // // const rightBtnEl = document.querySelector('.arrow.carousel-right-arrow')
// // // // // const lastIndex = indiceSlideAttiva.lenght - 1

// // // // // rightBtnEl.addEventListener('click', function () {



// // // // //     console.log('slide corrente', indiceSlideAttiva)

// // // // //     let slideCorrente = slideElements[indiceSlideAttiva]
// // // // //     //   togliendo la classe active
// // // // //     slideCorrente.classList.remove('active')

// // // // //     //   inremento l'indice
// // // // //     if (slideCorrente < lastIndex) {
// // // // //         slideCorrente += 1
// // // // //     } else {
// // // // //         slideCorrente = 0
// // // // //     }

// // // // //     let prossimaSlide = slideElements[indiceSlideAttiva]
// // // // //     //   aggiungiamo la classe active alla seconda slide
// // // // //     prossimaSlide.classList.add('active')

// // // // //     console.log('next slide', indiceSlideAttiva)




// // // // //     // if (indiceSlideAttiva = lastIndex.lenght){

// // // // //     //     console.log('slide corrente', indiceSlideAttiva)

// // // // //     //     let slideCorrente = slideElements[indiceSlideAttiva]
// // // // //     //    //   togliendo la classe active
// // // // //     //     slideCorrente.classList.remove('active')

// // // // //     //    //   inremento l'indice
// // // // //     //     indiceSlideAttiva += 1

// // // // //     //     let prossimaSlide = slideElements[indiceSlideAttiva]
// // // // //     //    //   aggiungiamo la classe active alla seconda slide
// // // // //     //     prossimaSlide.classList.add('active')

// // // // //     //     console.log('next slide', indiceSlideAttiva)

// // // // //     // }
// // // // //     // else {
// // // // //     //     let slideCorrente = slideElements[indiceSlideAttiva]
// // // // //     //     slideCorrente.classList.remove('active')

// // // // //     //     indiceSlideAttiva = 0

// // // // //     //     let prossimaSlide = slideElements[indiceSlideAttiva]
// // // // //     //     // aggiungiamo la classe active alla seconda slide
// // // // //     //     // prossimaSlide === 0
// // // // //     //     prossimaSlide.classList.add('active')

// // // // //     // }

// // // // // })

// // // // // leftBtnEl.addEventListener('click', function () {

// // // // //     console.log('slide corrente', indiceSlideAttiva)

// // // // //     let slideCorrente = slideElements[indiceSlideAttiva]
// // // // //     //   togliendo la classe active
// // // // //     slideCorrente.classList.remove('active')

// // // // //     //   inremento l'indice
// // // // //     indiceSlideAttiva -= 1

// // // // //     let prossimaSlide = slideElements[indiceSlideAttiva]
// // // // //     //   aggiungiamo la classe active alla seconda slide
// // // // //     prossimaSlide.classList.add('active')

// // // // //     console.log('next slide', indiceSlideAttiva)



// // // // // })


















