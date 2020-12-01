import React from 'react'
import '../App.css'
import Face from './Face'
import Ads from './Ads'

const Advert=({value})=>(
    <div className="col-sm-6">
        <div className="row">
            <Ads/>
            <Face   face={value.face}
                    price={value.price}
                    date={value.date}
                    size={value.size}
                    column={"col-sm-6"}    
                    />
        </div>
    </div>
)

export default Advert;