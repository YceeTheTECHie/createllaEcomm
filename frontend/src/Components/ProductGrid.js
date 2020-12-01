import React, { Component } from 'react';
import {getResult} from '../Helpers/FetchData'
import NavBar from './Layout/NavBar';
 import ContentGrid from './ContentGrid'
class ProductGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            page: 0,
            products: [],
          lastResult: false,
            
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





// function to detect scroll position and display the rest of the pducts
  onScroll = () => {
            const onScrollPosition = window.innerHeight + window.scrollY,
            fullScreen = document.body.offsetHeight - 500

    if (onScrollPosition >= fullScreen) {
                
             (!this.state.lastResult) ?  this.otherFetch() : null
               
     }
  }
  
 sortById = () => {
    const {products} = this.state

    products.sort((a,b)=>a.id-b.id)

    this.setState((prevState)=>
    ({products:[...products]}))
  }

  //sorts the product list by price
  sortByPrice = () => {
    const {products} = this.state

    products.sort((a,b)=>a.price-b.price)

    this.setState((prevState)=>
    ({products:[...products]}))
  }

  //sorts the product list by size
 sortBySize = () => {
    const {products} = this.state

    products.sort((a,b)=>a.size-b.size)
    
    this.setState((prevState)=>
    ({products:[...products]}))
  }

  
  componentDidMount(){
    this.firstFetch()
    window.addEventListener('scroll', this.onScroll, false);

  }

    // componentDidMount() {
    //     this.firstFetch();
    // windo  w.addEventListener('scroll', this.onScroll, false);

    // }
   

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
  }

    render() {
        return (
            <React.Fragment>
                <NavBar size={this.sortBySize}
                      price={this.sortByPrice}
                      id={this.sortById} />
                <ContentGrid value={this.state.products}
                            action ={this.state.isLoading}
                            condition={this.state.lastResult}/>
                            
            </React.Fragment>
        );
    }
}

export default ProductGrid;