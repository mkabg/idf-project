import DatePost from "./DatePost";
import DescriptionPost from "./DescriptionPost";
import ImgPost from "./ImgPost";
import LikesPost from "./LikesPost";
import UserPost from "./UserPost";
import "../../styles/post-style.css";

export default function Post() {
  return (
    <div>
      <header className="header">
        <DatePost />
        <UserPost />
      </header>
      <section className="body">
        <ImgPost />
        <DescriptionPost />
      </section>
      <footer className="footer">
        <LikesPost />
      </footer>
    </div>
  );
}
