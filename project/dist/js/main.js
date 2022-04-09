const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo-info')
const navItem = document.querySelectorAll('.nav-item');


let showMenu = false;

const toggleMenu = () =>{
    if(showMenu === false){
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        menu.classList.add('show');
        logo.classList.add('show');
        navItem.forEach(item=>item.classList.add('show'))

        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        menu.classList.remove('show');
        logo.classList.remove('show');
        navItem.forEach(item=>item.classList.remove('show'))

        showMenu = false;
    }
}

menuBtn.addEventListener('click', toggleMenu)