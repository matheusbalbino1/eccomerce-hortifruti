import { Routes, Route } from "react-router-dom";
import "./global.scss"
import Home from "./pages/Home/Home";
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer";
import { Carrinho } from "./pages/Carrinho/Carrinho";

function App() {
  console.log("teste")
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
