module.exports = function (url) {
    if (url.indexOf('https://www.youtube.com') == 0)
        return url.split('v=')[1].split('&')[0]
    else return false
}