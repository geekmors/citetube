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
    },
    metaDescription(){
        return `
            CiteTube lets you quickly generate citations for YouTube videos for both MLA and APA formats for free, 
            simply copy the YouTube video URL and create a citation. Get Started now.
        `
    }
}