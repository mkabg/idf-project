type Props = {
  postId: number;
  likes: number;
  onLike: (postId: number) => void;
};


export default function LikesPost({ postId, likes, onLike }: Props) {
  return (
    <button
      aria-label="Like post"
      onClick={() => onLike(postId)}
      className="like-btn"
      style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid #ddd", cursor: "pointer" }}
    >
      👍 {likes}
    </button>
  );
}

// export default function LikesPost() {
//     // count likes
//     const [likes, setLikes] = useState(0)
//     // 
//     const [flag, setFlag] = useState(false)

//     const likeClick = () => {
//         if (!flag) {
//             setLikes(likes + 1)
//             setFlag(true)
//         } else {
//             setLikes(likes - 1)
//             setFlag(false)
//         }
//     }
//   return (
//     <div>
//         <button onClick={likeClick}>👍</button>
//         {likes}
//     </div>
//   )
// }
