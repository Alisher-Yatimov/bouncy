const burger = document.querySelector('.burger-menu')
const navigation = document.querySelector('.main__nav')
const slide = document.querySelectorAll('.slide')
const body = document.querySelector('body')
const links = document.querySelectorAll('a')
const mainBtn = document.querySelector('.main__btn')

mainBtn.addEventListener('click', e => {
  window.scrollTo(0, window.innerHeight)
})

links.forEach(link => {
  link.addEventListener('click', e => {
    navigation.classList.remove('active')
    burger.classList.remove('active-burger')
    body.classList.remove('burger-active')
  })
})

let currentSlide = 0;

burger.addEventListener('click', e => {
  navigation.classList.toggle('active')
  burger.classList.toggle('active-burger')
  body.classList.toggle('burger-active')
})

function activateSlide(){
  if(this.classList.contains('active')){
    this.classList.remove('active')
  } else {
    slide.forEach(el => {
      el.classList.remove('active')
    })
    this.classList.add('active')
  }
}

slide.forEach(sl => {
  sl.addEventListener('click', activateSlide)
})

if(window.outerWidth <= 600){
  const sl3 = new Slider('.masonry__container', {buttons: true})
}


const sl = new Slider('.team__slider__container')
const sl2 = new Slider('.testimonials__slider__container', {buttons: true, dots: true})

const plans = document.querySelectorAll('.prices__plan')
const prices = document.querySelectorAll('.prices__price')

plans.forEach((pl, idx) => {
  pl.addEventListener('click', e => {
    if(pl.classList.contains('active')){
      return removeActiveClasses()
    }
    removeActiveClasses()
    pl.classList.toggle('active')
    prices[idx].classList.toggle('active')
  })
})

function removeActiveClasses(){
  plans.forEach((pl, idx) => {
    pl.classList.remove('active')
    prices[idx].classList.remove('active')
  })
}