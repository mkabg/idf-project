import "./App.css";
import Router from "./app/Router";
import NavBar from "./comps/NavBar";
import Header from "./comps/appliction-layout/Header";

export default function App() {
  return (
    <div>
      <header>
        <Header />
        <NavBar />
      </header>
      <hr />
      <div>
        <Router />
      </div>
    </div>
  );
}
