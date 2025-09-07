import { postDb } from "../../db/db";

// type Post = {
//   img: string,
//   description: string,
//   likes: number,
//   userName:string,
//   date: string
// }

export default function LoadPost() {
  const posts = postDb;
  return (
    <div>
      {posts.map((post) => (
        <div>
          <h3>
            {post.date}
            {post.user}
          </h3>
          <img src={post.img} />
          <p>{post.description}</p>
          <footer>
            {post.date}
            {post.likes}
          </footer>
        </div>
      ))}
    </div>
  );
}
