const btnMb = document.querySelector('#btn-mb')
function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const menu = document.querySelector('nav')
    menu.classList.toggle('show-menu')

    const active = menu.classList.contains('show-menu')
    console.log(active)

    event.currentTarget.setAttribute('aria-expanded', active)

    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Close menu')
    } else {
        event.currenTarget.setAttribute('aria-label', 'Open menu')
    }
}
btnMb.addEventListener('click', toggleMenu)
btnMb.addEventListener('touchstart', toggleMenu)