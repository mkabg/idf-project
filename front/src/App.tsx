import "./App.css";
import Router from "./app/Router";
import Header from "./comps/appliction-layout/Header";

export default function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <hr />
      <div>
        <Router />
      </div>
    </div>
  );
}
