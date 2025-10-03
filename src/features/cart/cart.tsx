import { useState } from "react";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { IconWithCounter, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from "../../components";
import BasketCanvas from "./cartDetails";
import { useAppSelector } from "../../app/hooks";
import { selectCart } from "./cartSlice";

const Basket = () => {
  const [show, setShow] = useState(false);
    const basket = useAppSelector(selectCart);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <IconWithCounter icon={faBasketShopping} count={basket.items.length} onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Votre panier</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <BasketCanvas />
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default Basket;