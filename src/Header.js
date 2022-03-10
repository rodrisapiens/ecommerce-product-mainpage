import React, { useState,useContext,useEffect } from 'react';
import { Link } from "react-router-dom";
import Thumbnail from "./Pages/images/image-avatar.png"
import "./styles/header.css"
import { ReactComponent as Cart } from "./icon-cart.svg";
import BuyDashBoard from './BuyDashBoard';
import { Fragment } from 'react';
import {CountContext} from "./Pages/Context";
import { AddedContext } from "./Pages/Context";
import { cartCountContext } from "./Pages/Context";


function Header() {
    const [cartBtn, setCartBtn] = useState(false);
    const{count}=useContext(CountContext);
    const[page,setPage]=useState("Collections");
    const{cartCount}=useContext(cartCountContext);
    function handleCartBtn() {
        setCartBtn(!cartBtn);
    }
    return (
        <Fragment>
        <div className='header'>
            <h1 className="sneakers">sneakers</h1>
            <ul className="links">
                <li className={page==="Collections"?"linkOn":"link"}onClick={()=>{setPage("Collections")}}>
                    <Link to={"/Collections"}>Collections</Link>
                </li>
                <li className={page==="Men"?"linkOn":"link"} onClick={()=>{setPage("Men")}}>
                    <Link to={"/Men"}>Men</Link>
                </li>
                <li className={page==="Women"?"linkOn":"link"} onClick={()=>{setPage("Women")}}>
                    <Link to={"/Women"}>Women</Link>
                </li>
                <li className={page==="About"?"linkOn":"link"} onClick={()=>{setPage("About")}}>
                    <Link to={"/About"}>About</Link>
                </li>
                <li className={page==="Contact"?"linkOn":"link"} onClick={()=>{setPage("Contact")}}>
                    <Link to={"/Contact"}>Contact</Link>
                </li>
            </ul>
            <button className="cartbtn" onClick={handleCartBtn}><p className="orangeNumber">{cartCount>0?cartCount:null}</p><Cart className="cart0" /></button>
            <img src={Thumbnail} alt="thumbnail" className="thumbnail" />
        </div>
        {cartBtn&&<BuyDashBoard/>}
        </Fragment>
    )
}

export default Header
