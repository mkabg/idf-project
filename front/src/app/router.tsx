import { Route, Routes } from "react-router-dom";
import Home from "../comps/pages/Home";
import Posts from "../comps/pages/Posts";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts/>}/>
      </Routes>
    </div>
  );
}
