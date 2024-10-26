import asyncHandler from "express-async-handler";
import cloudinary from "../utils/cloudinary.js";
import Blog from "../models/blogModel.js";
import mongoose from "mongoose";

export const addBlog = asyncHandler(async(req,res)=>{
    const {title,content,authorId,slug} = req.body;
    let coverImageUrl =null;

    if (req.file) {
        try {
            const result = await cloudinary.uploader.upload(req.file.path);
            coverImageUrl = result.secure_url;
        } catch (error) {
            console.error('Cloudinary upload error:', error);
            return res.status(400).json({ error: 'Failed to upload image to Cloudinary' });
        }
    }
    const blog = await Blog.create({
        title,
        content,
        authorId: new mongoose.Types.ObjectId(authorId),
        slug,
        coverImageUrl
    })
    console.log(blog);
    
    res.status(201).json(blog)
})