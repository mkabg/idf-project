import { useState } from "react"

export default function DatePost() {
  const [dateMs, setDateMS] = useState<number>(Date.now())
  const [date, setDate] = useState(new Date(dateMs))
  
  return (
    <div>
        {date.toLocaleString()}
    </div>
  )
}
