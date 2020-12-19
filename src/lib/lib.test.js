const yt = require('./YTInterface.lib')
const Citation = require('./Citation.lib')


async function main() {
    let data = await yt.getVideoById('RDTEjYC2Jra_A')
    console.log(Citation.APA.create(data))
}
main()