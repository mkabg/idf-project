import express from 'express';

import { getPosts } from '../controllers/post-controller.js';
import { getPostById } from '../controllers/post-controller.js';
import { createPost } from '../controllers/post-controller.js';
import { updatePost } from '../controllers/post-controller.js';
import { deletePost } from '../controllers/post-controller.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
