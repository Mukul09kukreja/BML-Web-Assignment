import { Router } from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/post.controller.js';

const router = Router();

router.route('/create').post(createPost);
router.route('/getPosts').post(getPosts);
router.route('/update/:id').patch(updatePost);
router.route('/delete/:id').delete(deletePost);
export default router;