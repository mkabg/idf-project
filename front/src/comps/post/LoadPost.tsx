import type { Post } from "../pages/Home";
import LikesPost from "./LikesPost";

type PostProps = {
  posts: Post[];
};

export default function LoadPost({ posts }: PostProps) {
  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <div>
            {post.date}
            {post.userName}
          </div>
          <img src={post.img} alt="post img" />
          <p>{post.description}</p>
          <footer>
            <LikesPost />
          </footer>
        </div>
      ))}
    </div>
  );
}
