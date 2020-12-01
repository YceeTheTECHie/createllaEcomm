import React, { Component } from 'react';
import {adIndexController} from '../Helpers/adIndexController'
import '../App.css'

class Ads extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentDidMount(){
        const ind =adIndexController()
        this.setState(()=>({
            ind
        }))
    }
   render(){ 
    return(
    <div className="col-sm-6">
        <div className="item-container">
           {    (this.state.ind)? 
                    <img src={'http://localhost:5000/ads/?r='+this.state.ind} 
                        alt="adverts" 
                            /> : null
            }
        </div>
    </div>
    )
}
}
export default Ads