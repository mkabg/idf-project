import { useState } from "react";
import img from "../../assets/img/logo.jpg";

export default function ImgPost() {
  const [imgSrc, setImgSrc] = useState<string>(img);

  return (
    <div>
      <img className="img-post" src={imgSrc} alt="post img" />
    </div>
  );
}
