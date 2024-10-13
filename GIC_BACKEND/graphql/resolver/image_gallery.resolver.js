const { get_preSinged_url } = require('../../aws')
const Home_imageGallery = require('../../models/Home_imagegallery')

module.exports = {
    Home_image_gallery : async()=>{
        try{
            const img_lst = await Home_imageGallery.findAll()
            const gallery_lst = await Promise.all(img_lst.map(async(img,index)=>{
                const url = await get_preSinged_url(img.image)
                return {...img.toJSON(),url}
            }))
            return gallery_lst
        }
        catch(error){
            throw new Error(error.message)
        }
    }
}