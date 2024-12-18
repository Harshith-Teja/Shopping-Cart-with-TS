import useCart from "../hooks/useCart";
import Nav from "./Nav";

type HeaderProps = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ viewCart, setViewCart }: HeaderProps) => {
  const { totalItems, totalPrice } = useCart();

  return (
    <div>
      <header className="header">
        <div className="header__title-bar">
          <h1>Acme Co.</h1>
          <div className="header__price-box">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: {totalPrice}</p>
          </div>
        </div>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </header>
    </div>
  );
};

export default Header;
