import { Routes, Route } from "react-router-dom";
import "./global.scss"
import Home from "./pages/Home/Home";
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
