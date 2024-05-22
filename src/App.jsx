import Header from "./components/Header";
import "./App.css";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { Divider } from "@chakra-ui/react";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Header />
      <Product />
      <Homepage />
      <Divider />
      <Footer />
    </>
  );
}

export default App;
