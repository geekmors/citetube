const Env = require('../../../src/lib/Env')
module.exports = {
    app: {
        name: Env.get('APP_NAME', 'Cite Tube'),
    },
    Vue:()=>{
        return (Env.get('PROD', false)
            ?'<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>'
            :'<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>'
        )
    }
}