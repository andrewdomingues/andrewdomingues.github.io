const btnMb = document.querySelector('#btn-mb')
function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()
    const menu = document.querySelector('nav')
    menu.classList.toggle('show-menu')
    const active = menu.classList.contains('show-menu')
    event.currentTarget.setAttribute('aria-expanded', active)
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}
btnMb.addEventListener('click', toggleMenu)
btnMb.addEventListener('touchstart', toggleMenu)