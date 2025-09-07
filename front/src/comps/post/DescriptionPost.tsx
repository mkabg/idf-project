import { useState } from "react"

export default function DescriptionPost() {
  const [description, setDescription] = useState<string>("first post")
  return (
    <div>
        {description}
    </div>
  )
}
