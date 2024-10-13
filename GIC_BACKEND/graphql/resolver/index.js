const startup_resolver = require('./startup.resolver')
const partner_resolver = require('./partner.resolver')
const quote_resolver = require('./quotes.resolver')
const inquire_resolver = require('./inquire.resolver')
const incubation_resolver = require('./incubation.resolver')
const reachout_resolver = require('./reachout.resolver')
const document_resolver = require('./documents.reslover')
const image_gallery_resolver = require('./image_gallery.resolver')

const rootResolver = {
    hello: ()=>{
    
        return ("hello user..!")
    },
    ...startup_resolver,
    ...partner_resolver,
    ...quote_resolver,
    ...inquire_resolver,
    ...incubation_resolver,
    ...reachout_resolver,
    ...document_resolver,
    ...image_gallery_resolver
}
module.exports = {rootResolver}