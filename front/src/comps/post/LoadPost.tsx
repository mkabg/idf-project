import { useState } from "react";
import { postDb } from "../../db/db";
import LikesPost from "./LikesPost";
import Home from "../pages/Home";


export type PostProp = {
  id: number
  img: string,
  description: string,
  likes: number,
  userName:string,
  date: string
}


// to do 
// fix load img
export default function LoadPost(posts:PostProp) {
  // const [posts, setPosts] = useState<Array<Post>>(postDb)
  return (
    <div>
      {posts.map((post: PostProp) => (
        <div key={post.id}>
          <div>
            {post.date}
            {post.userName}
          </div>
          <img src={post.img} alt="post img" />
          <p>{post.description}</p>
          <footer>
            <LikesPost/>
          </footer>
        </div>
      ))}
    </div>
  );
}
