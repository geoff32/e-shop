import { useState, useEffect } from "react";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { IconWithCounter, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "../../components";
import CartDetails from "./cartDetails";
import { useAppSelector } from "../../app/hooks";
import { selectCart } from "./cartSlice";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const [show, setShow] = useState(false);
  const cart = useAppSelector(selectCart);
  const location = useLocation();

  useEffect(() => {
    setShow(false);
  }, [location]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <IconWithCounter icon={faBasketShopping} count={cart.items.length} onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Votre panier</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <CartDetails />
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default Cart;