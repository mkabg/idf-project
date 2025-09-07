import { useState } from "react"

export default function LikesPost() {
    // count likes
    const [likes, setLikes] = useState(0)
    // 
    const [flag, setFlag] = useState(false)

    const likeClick = () => {
        if (!flag) {
            setLikes(likes + 1)
            setFlag(true)
        } else {
            setLikes(likes - 1)
            setFlag(false)
        }
    }
  return (
    <div>
        <button onClick={likeClick}>👍</button>
        {likes}
    </div>
  )
}
