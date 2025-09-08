import "../../assets/styles/application-layout/header.css"
import { useState } from "react";
import imgSrc from "../../assets/img/logo.jpg";

export default function Header() {
  const [img, setImag] = useState(imgSrc);
  const [slogen, setSlogen] = useState("Your Link to the Digital World.");

  return (
    <div className="header">
      <img className="logo" src={img} alt="logo" />
      <h1>{slogen}</h1>
    </div>
  );
}
