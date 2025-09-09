import { useEffect, useState } from "react";
import type { Post } from "../post/LoadPost";
import { getPosts } from "../../services/api/posts";
import LoadPost from "../post/LoadPost";

export default function Home() {
  const [posts, setPosts] = useState<Post | null>(null);
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
    <LoadPost posts={{posts}}/>
  </div>
  );
}
