const fs = require('fs')
const dotenv = require('dotenv')
module.exports = {
    get(key, fallback) {
        const envFile = fs.readFileSync(__dirname + '/.env').toString()
        let env = dotenv.parse(envFile)
        return env[key] || fallback || null
    }
}