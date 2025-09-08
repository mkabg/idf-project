import {
  getPostsDB,
  getPostByIdDB,
  createPostDB,
  updatePostDB,
  deletePostDB,
} from "../dal/post-dal.js";

export function getPosts() {
    try {
    const data = getPostsDB();
    res.json(data);
  } catch (error) {
    console.log("get all posts error massege: ", error);
    res.status(500).json({ msg: error });
  }
}

export function getPostById() {
    try {
    const data = getPostByIdDB(req.params.id);
    if (data) return res.json(data);
    res.json({msg: "The post not found"})
  } catch (error) {
    console.log("get post by id error massege: ", error);
    res.status(500).json({ msg: error });
  }
}

export function createPost() {
    try {
        const newData = req.body
        
    } catch (error) {
        
    }
}

export function updatePost() {}

export function deletePost() {}
