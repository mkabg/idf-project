import fs from "fs";
import { json } from "stream/consumers";

const dataPath = "./DB/db.json";

export function readPosts() {
  try {
    const posts = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(posts);
  } catch (error) {
    throw error;
  }
}

export async function writePost(newPost) {
  try {
    fs.writeFileSync(dataPath, "utf-8", posts, () => {});
  } catch (error) {
    throw error;
  }
}

// export function getPostsDB() {
//   return readPosts();
// }

// export function getPostByIdDB(id) {
//   const posts = readPosts();
//   posts.forEach((post) => {
//     if (post.id === id) return post;
//     return "post not found";
//   });
// }

// export function createPostDB() {}

// export function updatePostDB() {}

// export function deletePostDB() {}
