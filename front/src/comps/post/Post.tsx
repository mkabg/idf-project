import "../../assets/styles/post/post-style.css";
import DatePost from "./DatePost";
import DescriptionPost from "./DescriptionPost";
import ImgPost from "./ImgPost";
import LikesPost from "./LikesPost";
import UserPost from "./UserPost";

export default function Post() {
  return (
    <div className="post">
      <div className="head-post">
        <DatePost />
        <UserPost />
      </div>
      <section className="body">
        <ImgPost />
        <DescriptionPost />
      </section>
      <footer className="footer">
        {/* <LikesPost /> */}
      </footer>
    </div>
  );
}
