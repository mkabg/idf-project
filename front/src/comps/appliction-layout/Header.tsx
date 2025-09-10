import "../../assets/styles/application-layout/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import imgSrc from "../../assets/img/logo.jpg";

export default function Header() {
  const [img, setImag] = useState(imgSrc);
  const [slogen, setSlogen] = useState("Your Link to the Digital World.");

  return (
    <div className="header">
      <Link to="/" className="home-page-button">
        🏠
      </Link>
      <div className="logo">
        <img className="img-logo" src={img} alt="logo" />
        <div className="slogen">
          <h1>{slogen}</h1>
        </div>
      </div>
    </div>
  );
}
