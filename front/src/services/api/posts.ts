const postsUrl = "http://localhost:3000/posts";

export async function getPosts() {
  const res = await fetch(postsUrl);
  if (!res.ok) {
    throw new Error(`Error fething posts: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export async function getPostById(id: number) {
    const res = await fetch(`${postsUrl}/${id}`)
    if (!res.ok) {
        throw new Error(`Error fething post: ${res.status} ${res.statusText}`);
    }
    return res.json()
}
