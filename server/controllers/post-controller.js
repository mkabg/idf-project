// import {
//   getPostsDB,
//   getPostByIdDB,
//   createPostDB,
//   updatePostDB,
//   deletePostDB,
// } from "../dal/post-dal.js";
import { readPosts, writePost } from "../dal/post-dal.js";

export function getPosts(req, res) {
  try {
    const data = readPosts();
    res.json(data);
  } catch (error) {
    console.log("get all posts error massege: ", error);
    res.status(500).json({ msg: error });
  }
}

export function getPostById(req, res) {
  try {
    const id = req.params.id; 
    console.log(id);
    
    const data = readPosts();
    if (data) {
      console.log(data[2]);
      
      const post = data.find((p) => p.id === Number(id));
      console.log(post);
      
      if (post) return res.json(post);
    }
    res.status(403).json({ msg: "The post not found" });
  } catch (error) {
    console.log("get post by id: ", error);
    res.status(500).json({ msg: error });
  }
}

export function createPost() {}

export function updatePost() {}

export function deletePost() {}
