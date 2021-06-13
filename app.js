const menuresponsive = document.querySelector('.toggle-menu');
const btn = document.querySelector('.icone-toggle');
let linkmenu = document.querySelectorAll('.toggle-menu li a');
let backToTop = document.querySelector('.back-to-top');
let footer = document.querySelector('footer');

btn.addEventListener('click', ()=>{
    menuresponsive.classList.toggle('hidden');
});
// console.log(linkmenu);
linkmenu.forEach((item)=>{
    item.addEventListener('click', ()=>{
        menuresponsive.classList.toggle('hidden');
    });
});