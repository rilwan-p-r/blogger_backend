import express from "express";
import { registerUser, signin } from "../controller/auth.js";
import { addBlog } from "../controller/addBlog.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";
import { getAllBlogs, getBlog } from "../controller/getBlog.js";
import { updateBlog } from "../controller/updateBlog.js";
import { deleteBlog } from "../controller/deleteBlog.js";

const router = express.Router();

router.post('/signup',registerUser);
router.post('/signin',signin)

router.route('/post').get(getAllBlogs).post(protect,upload.single('coverImage'),addBlog);
router.route('/post/:id').put(protect,upload.single('coverImage'),updateBlog).delete(protect,deleteBlog).get(getBlog)

export default router;