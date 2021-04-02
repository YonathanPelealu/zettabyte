const { Blogs } = require('../models/blog')

exports.createBlog = async (req,res,next) => {
    const { blogName, blogDescription } = req.body
    try {
        const create = await Blogs.create({ blogName, blogDescription })
        if (create) {res.send({ success: true, message: "new Blog Created"})}
        else { res.send({success: false, message: 'Failed to create new blog'})
        }
    } catch (e) {
        next(e)
    }
}
exports.getBlogById = async (req,res,next) =>{
    const {id} = req.params
    try {
        const find = await Blogs.find({_id:id})
        if (find.length > 0 ) res.send({success: true, Blogs: find })
        if (find.length === 0 ) res.send({success: true, message: 'Blogs not found' })
        else { res.sendStatus(404).json({ success: false, message:'Blogs not found'})}
    } catch (e) {
        next(e)
    }
}
exports.getAllBlogs = async (req,res,next) => {
    try {
        const all = await Blogs.find()
        if (all) res.send({success: true, total_data:all.length, Blogs: all })
        else { res.sendStatus(404).json({success: false, message: 'Blogs not found'})}
    } catch (e) {
        next(e)
    }
}

exports.updateBlogs = async (req,res, next) => {
    const {id} = req.params
    const {blogName,blogDescription} = req.body
    try {
        const update = await Blogs.findOneAndUpdate({where:{id}, blogName,blogDescription,blogDate: Date.now()})
        if (update) res.send({success: true, messages: 'Blog has been updated'})
        else { res.send({success:false, message: 'Failed to update'})}
    } catch (e) {
        next(e)
    }
}

exports.deleteBlogs = async (req,res,next) =>{
    const {id} = req.params
    try {
        const destroy = await Blogs.findOneAndDelete({_id:id})
        if (destroy) res.send({success: true, message:'Blogs Deleted'})
        else { res.send({ success: false, messages: 'Failed to delete Blog'})}
    } catch (e) {
        next(e)
    }
}