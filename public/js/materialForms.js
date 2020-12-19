"use strict";
(function () {
    // input type number, options

    function numberInput(el) {
        if (el.attr('data-maxLen')) {
            var numOfDigits = el.attr('data-maxLen')
            el.addEventListener('keydown', function (e) {
                if (this.value.length >= parseInt(numOfDigits) && e.key != "Backspace") {
                    e.preventDefault()
                }
                //el.value = el.value.substr(0, el.value.length - 1)
            })

        }
    }
    //events for all material field inputs
    var materialFieldInput = _$('.material-field_input')
    materialFieldInput.forEach(function (el, i) {
        el.addEventListener('focusin', function (e) {
            this.parentNode.classList.add('active')
            if (el.attr("type") == "number") {
                numberInput(el)
            }
        })
        el.addEventListener('focusout', function (e) {
            if (this.value.length == 0 && this.classList.contains('required')) {
                //this.focus()
                this.parentNode.classList.add('error')
            }
            else if (this.parentNode.classList.contains('error') && this.value.length > 0) {
                this.parentNode.classList.remove("error")
            }
            else if (this.value.length == 0 && !this.classList.contains('required'))
                this.parentNode.classList.remove('active')
        })
    })
})()