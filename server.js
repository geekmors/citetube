const Env = require('./src/lib/Env')
const PORT = Env.get('APP_PORT', 3000),
    express = require('express'),
    server = express(),
    router = require('./src/router'),
    bodyParser = require('body-parser'),
    expressEjsLayouts = require('express-ejs-layouts')
server.locals.$ = require('./views/inc/helper')

server.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(expressEjsLayouts)
    .use(express.static('public'))
    .use('/', router)
server.set('view engine', 'ejs')
server.listen(PORT, () => console.log(`[+] server has started on port:${PORT}`))