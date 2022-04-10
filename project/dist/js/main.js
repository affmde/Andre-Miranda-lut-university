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


//slideshow
let index=0
const pictures = document.querySelectorAll('.seasonPic');
const arrowBack = document.querySelector('.arrow-back');
const arrowFront = document.querySelector('.arrow-front');
let imageToShow= pictures[index]
let slidePic= document.getElementById('imageSlideshow')

arrowFront.addEventListener('click', ()=>{
    if(index >= pictures.length-1){
        index=-1
    }
    index++
    imageToShow= pictures[index]
    slidePic.src= imageToShow.currentSrc 
    console.log(index)
})
arrowBack.addEventListener('click', ()=>{
    if(index <= 0){
        index=pictures.length;
    }
    index--
    imageToShow= pictures[index]
    slidePic.src= imageToShow.currentSrc
})

