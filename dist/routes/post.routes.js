"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const post_conttroller_1 = require("../controllers/post.conttroller");
router.route('/')
    .get(post_conttroller_1.getPosts);
post(post_conttroller_1.createPost);
exports.default = router;
router.route('/:postId')
    .get(post_conttroller_1.getPost)
    .delete(deletePost);
exports.default = router;
