import { useState } from "react";
import img from "../../assets/img/logo.jpg";

export default function ImgPost() {
  const [imgSrc, setImgSrc] = useState<string>(img);

  return (
    <div>
      <img src={imgSrc} alt="post img" width={200} height={200}/>
    </div>
  );
}
