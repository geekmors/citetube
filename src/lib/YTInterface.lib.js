const axios = require('axios')
const ytConfig = require('../../config/yt.config')

module.exports = {
    async getVideoById(id) {
        let data = await axios.get(ytConfig.api.search(id, 'snippet,statistics')).then(res => res.data)
        if (data.items.length > 0)
            return data.items.filter(item => item.id == id)
        else
            throw new Error(`Could not find video with id: ${id}`);
    }
}