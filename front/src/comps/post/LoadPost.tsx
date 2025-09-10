import "../../assets/styles/post/load-style.css";
import type { PostType } from "../../types/PostType";
import LikesPost from "./LikesPost";

type PostProps = {
  posts: PostType[];
  onLike: (postId: number) => void;
};

export default function LoadPost({ posts, onLike }: PostProps) {
  if (!posts.length) {
    return <p style={{ opacity: 0.7 }}>There is nothing here yet.</p>;
  }
  return (
    <section aria-label="Posts list">
      {posts.map((post: PostType) => (
        <article className="article" key={post.id}>
          <header className="load-header">
            <strong>{post.userName}</strong>
            <div className="time" >{post.date}</div>
          </header>
          <figure className="figure">
            <img
              className="load-img"
              src={"logo.jpg"}
              alt={`Post by ${post.userName}`} width={300}// Meaningful alt for accessibility
            />
            <figcaption className="figcaption">{post.description}</figcaption>
          </figure>
          <footer className="load-footer">
            <LikesPost postId={post.id} likes={post.likes} onLike={onLike} />
          </footer>
        </article>
      ))}
    </section>
  );
}
