const ytParser = require('../lib/URLparser.lib')
const YTInterface = require('../lib/YTInterface.lib')
const Citation = require('../lib/Citation.lib')
module.exports = {
    home(req, res) {
        res.render('pages/home')
    },
    async video(req, res) {
        try {

            if (req.query.url) {
                var url = req.query.url
                let id = ytParser(url)

                if (id) {
                    let data = await YTInterface.getVideoById(id)

                    res.render('pages/video', {
                        type: 1,
                        videoId: id,
                        // cite mode defaults to APA if none is specified
                        citeMode: req.query.citeMode || 'APA',
                        imgThumb: data[0].snippet.thumbnails.default.url,
                        video_title: data[0].snippet.title,
                        video_channel: data[0].snippet.channelTitle,
                        video_description: data[0].snippet.description
                    })
                }
                else {
                    res.render('pages/video', { type: 0 })
                }
            }
            else {
                res.render('pages/video', { type: -1 })
            }
        }
        catch (e) {
            res.render('pages/video', { type: 0 })
        }
    },
    async cite(req, res) {
        var id = req.params.videoId
        try {

            let data = await YTInterface.getVideoById(id)
            let citation = {}
            citation["APA"] = Citation.APA.cite(data)
            citation["MLA"] = Citation.MLA.cite(data)
            res.render('pages/citation', {
                type: 1,
                citation: citation,
                videoId:id
            })
        }
        catch (e) {
            res.render('pages/citation', {
                type: 0,
                message: e.message
            })
        }
    }
}