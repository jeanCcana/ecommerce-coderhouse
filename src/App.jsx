import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Detail from "./components/Detail";

function App() {
  // return <Home />;
  // return <Detail />;
  return (
    <main className="flex flex-col bg-[#FAFAFA]">
      <BrowserRouter>
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </div>
        <NavBar />
      </BrowserRouter>
    </main>
  );
}

export default App;
