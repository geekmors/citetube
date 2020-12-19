const Env = require('../src/lib/Env')
module.exports = config = {
    api: {

        _: `${Env.get('YOUTUBE_API')}?key=${Env.get('GOOGLE_YOUTUBE_API_KEY')}`,
        search: (id, fields) => `${config.api._}&id=${id}&part=${fields}`
    }
}