{
    let elNav, elNavControl;

    function onClickNavControl (event) {
        event.preventDefault()
    }

    document.addEventListener('DOMContentLoaded', event => {
        elNav = document.getElementById('navigation')
        elNavControl = document.getElementById('navigation-control')

        elNavControl.addEventListener('click', onClickNavControl)
    })
}