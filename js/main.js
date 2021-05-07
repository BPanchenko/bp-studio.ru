{
    let elNav, elNavControl

    function onClickNavControl (evt) {
        evt.preventDefault()
        evt.stopPropagation()
        let expanded = elNavControl.getAttribute('aria-expanded') !== 'true'
        elNav.setAttribute('aria-expanded', expanded)
        elNavControl.setAttribute('aria-expanded', expanded)
    }

    document.addEventListener('DOMContentLoaded', evt => {
        elNav = document.querySelector('.js-nav')
        elNavControl = document.querySelector('.js-nav-control')
        elNav.addEventListener('click', evt => evt.stopPropagation())
        elNavControl.addEventListener('click', onClickNavControl)
    })
}