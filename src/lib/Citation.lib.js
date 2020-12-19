const CitationDate = require('./CitationDate.lib')
/**
 * @description check if the keys required are in the data object. Throws an error otherwise
 * @param {Object} data 
 * @returns bool
 */
function checkDataForAPA(data) {
    let isNothingMissing = true
    if (data.snippet) {
        for (let key of ["channelTitle", "title", "publishedAt"]) {
            if (typeof data[key] != "undefined") {
                throw new Error(`missing ${key}`)
            }
        }
        if (!data.id)
            throw new Error('missing id')
        return isNothingMissing
    }
    else {
        throw new Error('missing snippet')
    }

}
module.exports = {
    // Handle any APA specific citation models
    APA: {
        /**
         * @description generates APA citation based on data provided
         * Current APA model: 
         *  username. (year, month day). video_title [Video]. YouTube. video_url 
         * @returns string
         */
        cite(data) {
            try {
                if (typeof data != "undefined" && typeof data[0] != "undefined" && checkDataForAPA(data[0])) {
                    let _cite = {}
                    data = data[0]
                    _cite["username"] = data.snippet["channelTitle"]
                    _cite["video_title"] = data.snippet["title"]
                    _cite["published"] = data.snippet["publishedAt"]
                    _cite["url"] = `https://www.youtube.com/watch?v=${data.id}`
                    return `${_cite.username}. (${(new CitationDate(_cite.published)).APADateFormat}). ${_cite.video_title} [Video]. YouTube. ${_cite.url}`
                }
                else {
                    throw new Error('no data to process')
                }
            }
            catch (e) {
                throw new Error(`unable to create APA citation with data provided. ${e.message}`)
            }
        }
    },
    MLA: {
        cite(data) {
            try {
                if (typeof data != "undefined" && typeof data[0] != "undefined" && checkDataForAPA(data[0])) {
                    let _cite = {}
                    data = data[0]
                    _cite["username"] = data.snippet["channelTitle"]
                    _cite["video_title"] = data.snippet["title"]
                    _cite["published"] = data.snippet["publishedAt"]
                    _cite["url"] = `https://www.youtube.com/watch?v=${data.id}`
                    return `“${_cite.video_title}.” YouTube, uploaded by ${_cite.username}, ${(new CitationDate(_cite.published)).MLADateFormat}, ${_cite.url}`
                }
                else {
                    throw new Error('no data to process')
                }
            }
            catch (e) {
                throw new Error(`unable to create MLA citation with data provided. ${e.message}`)
            }
        }
    }
}
