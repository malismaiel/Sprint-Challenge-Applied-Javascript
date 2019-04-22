class Carousel {
  constructor(obj) {
    this.carousel = obj
    this.left_button = this.carousel.querySelector('.left-button')
    this.right_button = this.carousel.querySelector('.right-button')
    this.images = Array.from(document.querySelectorAll('.carousel img'))
    this.cur_index = 0
    this.images[this.cur_index].style.display = 'flex'
    this.right_button.addEventListener('click', this.cycle_right.bind(this))
    this.left_button.addEventListener('click', this.cycle_left.bind(this))
}

cycle_right() {
    // infinite loop by checking if cur_index is at the start of end of the array
    if (this.cur_index === this.images.length - 1) {
        this.cur_index = 0;
        this.images.forEach(img => img.style.display = 'none');
        this.images[this.cur_index].style.display = 'flex';
    } else {
        this.cur_index++;
        this.images.forEach(img => img.style.display = 'none');
        this.images[this.cur_index].style.display = 'flex';
    }


}

cycle_left() {
    if (this.cur_index === 0) {
        this.cur_index = this.images.length - 1;
        this.images.forEach(img => img.style.display = 'none');
        this.images[this.cur_index].style.display = 'flex';
    } else {
        this.cur_index--;
        this.images.forEach(img => img.style.display = 'none');
        this.images[this.cur_index].style.display = 'flex';

    }

}

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
