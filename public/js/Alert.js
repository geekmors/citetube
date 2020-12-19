"use strict"
function Alert({ type, message }) {
    var $alert = document.createElement('div')
    $alert.classList.add('alert')
    if (type == "error") {
        $alert.classList.add('error')
    }
    else
        $alert.classList.add('success')
    $alert.innerText = message
    $alert.addEventListener('click', function (e) {
        this.remove()
    })
    document.body.prepend($alert)

    setTimeout(function () {
        $alert.remove()
    }, 8000)
}