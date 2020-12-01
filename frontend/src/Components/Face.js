import React from 'react';
import {DateConverter} from '../Helpers/DateConverter'

const Face =({face,price,size,date,column})=> (
    <div className={column||"col-sm-3"}>
        <div className="item-container">
            <span className="item-face" 
                  style={{fontSize:size}}>
            {face}
            </span>
            <span className="item-info-container">
            <span className="item-info-holder">
                <span>${price/100}</span>
                <span>{size+" px"}</span>
                <span>{DateConverter(date)}</span>
            </span>
            </span>
        </div>
    </div>
)

export default Face;

