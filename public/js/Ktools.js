"use strict"
var _ = selector => document.querySelector(selector)
var _$ = selector => document.querySelectorAll(selector)

NodeList.prototype.each = function (cb) {
    for (let node of this) {
        cb(node)
    }
}
NodeList.prototype.removeAttr = function (attribute) {
    for (let node of this) {
        node.removeAttribute(attribute)
    }
}
NodeList.prototype.click = function (cb) {
    for (let node of this) {
        node.addEventListener('click', cb)
    }
}
NodeList.prototype.attr = function (attribute, value) {
    for (let node of this) {

        if (typeof value == "undefined")
            return node.getAttribute(attribute)
        node.setAttribute(attribute, value)
    }
}
Node.prototype.removeAttr = function (attribute) {
    node.removeAttribute(attribute)
}
Node.prototype.handle = function (evt, cb) {
    node.addEventListener(evt, cb)
}
Node.prototype.attr = function (attribute, value) {
    if (typeof value == "undefined")
        return this.getAttribute(attribute)

    this.setAttribute(attribute, value)
    return this
}
Node.prototype.childWithClass = function (_class) {
    for (let node of this.childNodes) {

        if (node.classList && node.classList.contains(_class)) {
            return node
        }
    }
    return null
}