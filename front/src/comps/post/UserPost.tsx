import { useState } from "react"

export default function UserPost() {
    const [nameUser, setNameUser] = useState<string>("Mordechai")

  return (
    <div>
        {nameUser}
    </div>
  )
}
