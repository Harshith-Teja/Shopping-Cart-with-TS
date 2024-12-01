import { useState } from "react";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [viewCart, setViewCart] = useState(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  );
}

export default App;
