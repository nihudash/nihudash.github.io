const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
if(menuButton&&navLinks){
 menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
 const current=location.pathname.split('/').pop()||'index.html';
 navLinks.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===current){a.classList.add('active');a.setAttribute('aria-current','page');}});
}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
