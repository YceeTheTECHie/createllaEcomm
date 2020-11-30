import React from 'react';
import '../App.css'
import {DateConverter} from '../Helpers/DateConverter'

const Face = ({ face, price, size, date, column }) =>
    (
        <div className={column||"col-sm-3"}>
        <div className="product-container">
            <span className="item-face" 
                  style={{fontSize:size}}>
            {face}
            </span>
            <span className="product-info-container">
            <span className="product-info-holder">
                <span>${price/100}</span>
                <span>{size+" px"}</span>
                {/* <span>{timepassed(date)}</span> */}
            </span>
            </span>
        </div>
    </div>
    );


export default Face;