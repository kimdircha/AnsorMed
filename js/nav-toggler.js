function classToggle() {
    const navs = document.querySelectorAll('nav')
    
    navs.forEach(nav => nav.classList.toggle('nav-d-none'));
}

document.querySelector('.nav-toggler')
    .addEventListener('click', classToggle);