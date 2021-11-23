export default class UI {
  constructor (sliderElement, leftArrowElement, rightArrowElement) {
    this.sliderElement = sliderElement
    this.leftArrow = leftArrowElement
    this.rightArrow = rightArrowElement

    this.slideIndex = 0
    this.sliderElementsCount = sliderElement.childElementCount

    this.rightArrow.addEventListener('click', this.moveLeft.bind(this))
    this.leftArrow.addEventListener('click', this.moveRight.bind(this))

    for (let index = 0; index < this.sliderElementsCount; index++) {
      const singleSliderElement = sliderElement.children[index]
      const sliderElementImage = singleSliderElement.querySelector('.slider__item-image')
      sliderElementImage.style.transitionDelay = `${400 + index * 50}ms`
    }
  }

  moveLeft () {
    this.leftArrow.classList.remove('slider__arrow--disabled')
    const numberOfVisibleElements = 4
    if (this.slideIndex === this.sliderElementsCount - numberOfVisibleElements - 1) this.rightArrow.classList.add('slider__arrow--disabled')
    if (this.slideIndex === this.sliderElementsCount - numberOfVisibleElements) return

    this.slideIndex ++
    this.sliderElement.style.left = `-${this.slideIndex * 25}%`
  }

  moveRight () {
    this.rightArrow.classList.remove('slider__arrow--disabled')
    if (this.slideIndex === 1) this.leftArrow.classList.add('slider__arrow--disabled')
    if (this.slideIndex === 0) return

    this.slideIndex --
    this.sliderElement.style.left = `-${this.slideIndex * 25}%`
  }

  destroy () {
    this.sliderElement.removeAttribute('style')
    this.rightArrow.classList.remove('slider__arrow--disabled')
    this.leftArrow.classList.add('slider__arrow--disabled')
    this.rightArrow.removeEventListener('click', this.moveLeft.bind(this))
    this.leftArrow.removeEventListener('click', this.moveRight.bind(this))
  }
}