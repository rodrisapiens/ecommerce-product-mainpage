import React, { useContext, useEffect } from 'react'
import "./styles/buyDashBoard.css"
import product1 from "./Pages/images/image-product-1-thumbnail.jpg";
import { ReactComponent as TrashCan } from "./Pages/images/icon-delete.svg";
import { cartCountContext } from "./Pages/Context";
function BuyDashBoard(props) {
    const { cartCount, setCartCount } = useContext(cartCountContext);
    useEffect(() => {
        console.log(cartCount);
    }, [cartCount])
    function handleDashBody() {
        if (cartCount === 0) {
            return (<p className="howMany0">Your cart is empty</p>)
        }
        else {
            return (<><div className="insideDashBoard">
                <div className="columnBuyProduct">
                    <img src={product1} alt="prod1" className="dashBoardThumbnail" />
                    <div className="textDashBoard">
                        <p className="titleDashBoard">Fall limited edition sneakers</p>
                        <p className="calculation">
                            $125.00 x {cartCount} <span className="realPrice">${125 * cartCount}.00</span>
                        </p>
                    </div>
                    <button className="trash" onClick={() => { setCartCount(0) }}>{<TrashCan className="trashCan" />}</button>
                </div>
                <button className="checkOutBtn">Checkout</button>
            </div>
            </>)
        }
    }
    return (
        <div className="buyDashBoard">
            <div className="buyDashBoardHeader">
                <h3 className="cartDashBoard">Cart</h3>
            </div>
            <div className="buyDashBoardBody">
                {handleDashBody()}
            </div>
        </div>
    )
}

export default BuyDashBoard
