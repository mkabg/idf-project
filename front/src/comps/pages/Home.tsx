import { useEffect, useState } from "react";
import { getPosts } from "../../services/api/posts";
import LoadPost from "../post/LoadPost";

export type Post = {
  id: number;
  img: string;
  description: string;
  likes: number;
  userName: string;
  date: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Array<Post>>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        setErr(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (err) return <div>Error: {err}</div>;

  return (
    <div>
      <LoadPost posts={posts} />
    </div>
  );
}
