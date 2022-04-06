const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding')
const navItem = document.querySelectorAll('.nav-item');

let showMenu = false;


const toggleMenu = () => {
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('close');
        menuNav.classList.add('close');
        menuBranding.classList.add('close');
        navItem.forEach(item=> item.classList.add('show'))

        showMenu=true
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('close');
        menuNav.classList.remove('close');
        menuBranding.classList.remove('close');
        navItem.forEach(item=> item.classList.remove('show'))

        showMenu=false
    }
}
menuBtn.addEventListener('click', toggleMenu);



