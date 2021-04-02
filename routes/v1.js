const router = require('express').Router()
const { createBlog,deleteBlogs,updateBlogs,getAllBlogs,getBlogById, } = require ('../controller/blog')

router.post('/create',createBlog)
router.delete('/delete/:id',deleteBlogs)
router.put('/update/:id',updateBlogs)
router.get('/all',getAllBlogs)
router.get('/:id',getBlogById)

module.exports = router