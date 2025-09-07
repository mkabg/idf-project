import { Route, Routes } from "react-router-dom";
import Home from "../comps/pages/Home";
import Post from "../comps/Post";

export default function router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Post/>}/>
      </Routes>
    </div>
  );
}
