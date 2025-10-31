document.querySelectorAll('nav a').forEach(a=>{
a.addEventListener('click', e=>{
const href = a.getAttribute('href');
if(href.startsWith('#')){
e.preventDefault();
document.querySelector(href).scrollIntoView({behavior:'smooth'});
}
})
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
