import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import Navbar  from './Navbar'
import Footer  from './Footer'

import './../App.css';
import 'bootstrap/dist/css/bootstrap.css' 

const App = () => (
  <div>
    <Navbar></Navbar>
    <div className="container">
     <div className ="row">
       <div className="col-8">
      <ProductsContainer />
    </div>
    <div className="col-4">
    <CartContainer />
    </div>
    </div>
    </div>
    <Footer></Footer>
  </div>
)

export default App
