import { useCallback, useEffect, useState } from "react";
import { getPosts } from "../../services/api/posts";
import LoadPost from "../post/LoadPost";
import type { PostType } from "../../types/PostType";
import { postsSeed } from "../../data/db";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  // Try server first; on failure, fallback to local seed
  useEffect(() => {
    let mounted = true;
    getPosts()
      .then((data) => {
        if (!mounted) return;
        setPosts(data as PostType[]);
      })
      .catch(() => {
        if (!mounted) return;
        setPosts(postsSeed); // fallback for local dev
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const handleLike = useCallback((postId: number) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p))
    );
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (err) return <div>Error: {err}</div>;

  return (
    <div>
      <LoadPost posts={posts} onLike={handleLike} />
    </div>
  );
}
