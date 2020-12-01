import React, { Component } from 'react';
import {getResult} from '../Helpers/FetchData'
import Navigation from './Layout/NavBar';
 import ContentGrid from './ContentGrid'
class ProductGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            page: 0,
            products: [],
            lastResult: false
        }
    }
    //Gets product list initially, before component mounts
     firstFetch = () => {
        this.setState((prevState) => ({ fetching: true }))
        getResult(0)
            .then((res) => this.setState((prevState) => (
                {isLoading: false,products: res,page: 0,lastResult: false})))
    }

    otherFetch = () => {
        this.setState((prevState)=>({isLoading:true}))
        const page=this.state.page+1
        getResult(page)
            .then((res) => {
                (res.length) ?
        this.setState((prevState)=>(
        {
            isLoading:false,products:[...this.state.products,...res],page
         }))
            :
        this.setState((prevState)=>(
            {
                isLoading: false, lastResult: true
            }))
        })
        
    }






  onScroll = () => {
       
            const onScrollPosition = window.innerHeight + window.scrollY,
            wholeScreen = document.body.offsetHeight - 500

           if (onScrollPosition >= wholeScreen) {
      if(!this.state.lastResult){
        this.otherFetch()
      }
      }
  }
  
  
  componentDidMount(){
    this.firstFetch()
    window.addEventListener('scroll', this.onScroll, false);

  }

    // componentDidMount() {
    //     this.firstFetch();
    // window.addEventListener('scroll', this.onScroll, false);

    // }
// function to detect scroll position and display the rest of the pducts
   

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
  }

    render() {
        return (
            <React.Fragment>
                <Navigation />
                <ContentGrid value={this.state.products}
                            action ={this.state.isLoading}
                            condition={this.state.lastResult}/>
                            
            </React.Fragment>
        );
    }
}

export default ProductGrid;