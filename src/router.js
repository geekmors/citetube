const router = require('express').Router()
const appController = require('./controllers/app.controller')

//Home view
router.get('/', appController.home)
router.get('/video', appController.video)
router.get('/cite/:videoId', appController.cite)
router.use(function (req, res) {
    res.status(404).render('pages/error_404')
})

module.exports = router