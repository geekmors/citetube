const Env = require('../../../src/lib/Env')
module.exports = {
    app: {
        name: Env.get('APP_NAME', 'Cite Tube')
    }
}