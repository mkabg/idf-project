import { useState } from "react";
import { postDb } from "../../db/db";
import LikesPost from "./LikesPost";

type Post = {
  id: number
  img: string,
  description: string,
  likes: number,
  userName:string,
  date: string
}


// to do 
// fix load img
export default function LoadPost() {
  const [posts, setPosts] = useState<Array<Post>>(postDb)

  return (
    <div>
      {posts.map((post) => (
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
