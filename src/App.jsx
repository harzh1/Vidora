import Header from "./components/Header";
import "./App.css";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { Divider } from "@chakra-ui/react";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/prod/:id" element={<Product />} />
        </Routes>

        <Divider />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
