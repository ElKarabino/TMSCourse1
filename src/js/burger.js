const burger = document.querySelector('.header_burger');
const menu = document.querySelector('.header_nav');
const firstBurgerLine = document.querySelector('.first_burger_line');
const secondBurgerLine = document.querySelector('.second_burger_line');
const thirdBurgerLine = document.querySelector('.third_burger_line');
const menuLinks = document.querySelectorAll('.header_nav_links')

burger.addEventListener('click', () => {
    menu.classList.toggle('header_nav_active');
    firstBurgerLine.classList.toggle('first_line_active');
    secondBurgerLine.classList.toggle('second_line_active');
    thirdBurgerLine.classList.toggle('third_line_active');
    if (menu.classList.contains('header_nav_active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
})

menuLinks.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
        firstBurgerLine.classList.remove('first_line_active');
        secondBurgerLine.classList.remove('second_line_active');
        thirdBurgerLine.classList.remove('third_line_active');
        document.body.style.overflow = '';
    })
})