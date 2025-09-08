// Include the fs module
import fs from "fs";
// Read the file synchronously
const data = fs.readFileSync("../db/db.json", "utf-8");

// Display the file content
console.log(data);

function readPost(post) {}

function writePost(newPost) {}


export function getPostsDB() {}

export function getPostByIdDB() {}

export function createPostDB() {}

export function updatePostDB() {}

export function deletePostDB() {}
