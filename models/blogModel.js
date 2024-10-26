import mongoose from'mongoose';

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    coverImageUrl:{
        type:String,
        required:true
    }
},{timeStamp:true})

const Blog = mongoose.model('Blog',blogSchema);

export default Blog;

