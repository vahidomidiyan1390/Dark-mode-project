let checkbox = document.querySelector('.Switch__input');
checkbox.addEventListener('change', function(){
    document.body.classList.toggle('dark-mode')
})

const switchMobile = document.querySelector('.switch-mobile')
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')

sun.addEventListener('click', function(){
    sun.style.display = 'none'
    moon.style.display = 'block'
    document.body.classList.toggle('dark-mode')
})
moon.addEventListener('click',function(){
    moon.style.display = 'none'
    sun.style.display = 'block'
    document.body.classList.toggle('dark-mode')
})



