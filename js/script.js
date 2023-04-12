// Menu show Y Hidden
const navMenu = document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

// MENU SHOW
// validate if constant exists
if(navToggle)
{
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
// Validates if constant exists
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
// ACCORDIAN SKILLS
const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills()
{
    let itemClass=this.parentNode.className
    for(i=0;i<skillsContent.length;i++)
    {
        skillsContent[i].className='skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close')
    {
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((el) =>{
    el.addEventListener("click",toggleSkills)
})

// SERVICES MODAL
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')
let modal = function(modalClick)
{
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',() =>{
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click',() => {
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})


