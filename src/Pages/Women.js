import "./page.css"
import React, { useState, useContext,Fragment } from 'react';
import "./women.css";
import prod1 from "./images/image-product-1.jpg";
import prod2 from "./images/image-product-2.jpg";
import prod3 from "./images/image-product-3.jpg";
import prod4 from "./images/image-product-4.jpg";
import { ReactComponent as IconMinus } from "./images/icon-minus.svg";
import { ReactComponent as IconPlus } from "./images/icon-plus.svg";
import { ReactComponent as Cart } from "./images/icon-cart.svg";
import { CountContext } from "./Context";
import { AddedContext } from "./Context";
import { cartCountContext } from "./Context";
import BigImage from "./BigImage";


function Women() {
    const { count, setCount } = useContext(CountContext);
    const { added, setAdded } = useContext(AddedContext);
    const { cartCount, setCartCount } = useContext(cartCountContext);
    const [prod, setProd] = useState("prod1");
    const [showBigImage, setshowBigImage] = useState(false);
    function handleMinus() {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            setCount(0);
        }
        return;
    }
    function handlePlus() {
        setCount(count + 1);
        return;
    }
    function sendCount() {
        if (count > cartCount)
            setCartCount(count);
    }
    return (
        <Fragment>
        <div className="women">
            <div className="photos">
                <div className="bigImageConteiner">
                    <img src={prod === "prod1" ? prod1 : prod === "prod2" ? prod2 : prod === "prod3" ? prod3 : prod4} alt="bigImg" className="bigImage" onClick={()=>{setshowBigImage(true);}} />
                </div>
                <div className="thumbnails">
                    <img src={prod1} alt="prod1" onClick={() => { setProd("prod1"); console.log(prod); }} className={prod === "prod1" ? "prodthumnailOn" : "prodthumnail"} />
                    <img src={prod2} alt="prod2" onClick={() => { setProd("prod2"); console.log(prod); }} className={prod === "prod2" ? "prodthumnailOn" : "prodthumnail"} />
                    <img src={prod3} alt="prod3" onClick={() => { setProd("prod3"); console.log(prod); }} className={prod === "prod3" ? "prodthumnailOn" : "prodthumnail"} />
                    <img src={prod4} alt="prod4" onClick={() => { setProd("prod4"); console.log(prod); }} className={prod === "prod4" ? "prodthumnailOn" : "prodthumnail"} />
                </div>
            </div>
            <div className="texties">
                <div className="presentation">
                    <h3>Sneaker Company</h3>
                    <h1 className="blackTitle">  Fall Limited Edition Sneakers</h1>
                    <p>These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <div className="priceAndDiscount">
                        <h2 className="price">$125.00</h2>
                        <h2 className="discount">50%</h2>
                    </div>
                </div>
                <h4 className="previousPrice">$250.00</h4>
                <div className="buttons">
                    <div className="btnsmm">
                        <button className="minus" onClick={handleMinus}><IconMinus /></button>
                        <h1 className="count">{count}</h1>
                        <button className="plus" onClick={handlePlus}><IconPlus /></button>
                    </div>

                    <button className="addToCart" onClick={() => { setAdded(1); sendCount(); }}><Cart className="cart" />Add to Cart</button>

                </div>
            </div>
        </div >
        {showBigImage&&<BigImage handleShowClose={()=>{setshowBigImage(false)}} prod={prod}/>}
        </Fragment>

    )
}

export default Women
/* Sneaker Company

  Fall Limited Edition Sneakers

  These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.

  $125.00
  50%
  $250.00

  0
  Add to cart */