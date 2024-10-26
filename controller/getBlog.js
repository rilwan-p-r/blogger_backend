import asyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";

const getAllBlogs = asyncHandler(async(req,res)=>{
    const blogs = await Blog.find()
    .populate({
        path:'authorId',
        select:'name',
    })
    .sort({createdAt:-1})
    res.status(200).json(blogs);
})

const getBlog = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const blog = await Blog.findById(id)
    .populate({
        path:'authorId',
        select:'name _id'
    })
    res.status(200).json(blog);
})

export {
    getAllBlogs,
    getBlog
};