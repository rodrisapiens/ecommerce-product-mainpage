import React, { useEffect, useState } from 'react'
import prod1 from "./images/image-product-1.jpg";
import prod2 from "./images/image-product-2.jpg";
import prod3 from "./images/image-product-3.jpg";
import prod4 from "./images/image-product-4.jpg";
import { ReactComponent as Close } from "./images/icon-close.svg";
import { ReactComponent as Next } from "./images/icon-next.svg";
import { ReactComponent as Previous } from "./images/icon-previous.svg";
import "./bigBigImage.css";
function BigImage(props) {
    const [nextBtn, setNextBtn] = useState(false);
    const [previousBtn, setPreviousBtn] = useState(false);
    const [imgSource, setImgSource] = useState(prod1);
    function handleNext() {
        setNextBtn(true);
    }
    function handlePrevious() {
        setPreviousBtn(true);
    }
    useEffect(() => {
        const products = [prod1, prod2, prod3, prod4];
        let index = products.findIndex(find)
        console.log(index);
        let arrayLength=products.length;
        console.log(arrayLength)
        function find(actualProduct) {
            return actualProduct === imgSource;
        }
        if (previousBtn) {
            if (index === 0) {
                setImgSource(products[arrayLength-1]);
            }
            else{setImgSource(products[index - 1]);
                }
                setPreviousBtn(false);
        }
        if (nextBtn) {
            if (index===arrayLength-1) {
                setImgSource(products[0]);
            }
            else{
                setImgSource(products[index + 1]);
            }
            setNextBtn(false);
        }


    }, [nextBtn, previousBtn]);

    return (
        <div className="bigBigImageLayOut">
            <div className="bigBody">
                <Close className="closeBtn" onClick={props.handleShowClose} />
                <div className="flexbox">
                    <button className='PreviousBtn' onClick={handlePrevious}><Previous className="previousIcon" /></button>
                    <img src={imgSource} alt="bigImg" className="bigBigImage" />
                    <button className="nextBtn" onClick={handleNext}><Next className="nextIcon" /></button>

                </div>
            </div>

        </div>
    )
}

export default BigImage
