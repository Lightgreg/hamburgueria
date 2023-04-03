/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Cart from "./Cart";
import { Container } from "./Container";
import { Header } from "./Header";
import Search from "./Header/Inputsearch";
import Logo from "./Header/Logo";
import Product from "./product";
import api from "../services/api.js";
import Cardcart from "./Cart/Cartproduct";
import toast, { Toaster } from 'react-hot-toast';
import './style.css'

function Homepage() {

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0) 
  
  function itemFilter() {
    const inputLower = filter.toLowerCase()
    const productSearch = products.filter((e) => e.category.toLowerCase().includes(inputLower) || e.name.toLowerCase().includes(inputLower))    
    
    productSearch.length === 0 ? (      
      toast(' Produto não encontrado!')     
      )    
      :     
      (setFilteredProducts(productSearch))        
  }

  function remove(item) {
    const removeItem = currentSale.filter((e) => e !== item)
    setCurrentSale(removeItem)
    setCartTotal(cartTotal - parseInt(item.price))
  }
  
  useEffect(() => {
    api
      .get('products')
      .then(res => {
        setProducts(...products, res.data);       
      })
      .catch(err => console.log(err))

  }, [])

  function currentSaleList(item) {
    const newProduct = currentSale.find((e) => e.id === item.id )

    const verifyProduct = currentSale.find((e) => e === newProduct)
   
    const data = {
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      img: item.img
    }

    !verifyProduct ?
      setCurrentSale([...currentSale, data])
       (setCartTotal(cartTotal + parseInt(item.price)))
      :
      toast('Item já faz parte do seu carrinho')  
  }    
  
  function RemoverCart() {
    setCurrentSale([])
    setCartTotal(0)
  }

  return (
    <>
      <Header>
        <Container>
          <div className="flex1">
            <Logo></Logo>
            <Search click={itemFilter} state={((e)=>setFilter(e.target.value))} />
          </div>
        </Container>
      </Header>
        <Toaster />  
      <section className="shop">    
        <ul className="shop-left">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((e) => {
              return (
                <Product key={e.id} photo={e.img} name={e.name} type={e.category} price={e.price} item={e.id} click={() => { currentSaleList(e) }} />
              )
            })
          ) : (
              products.map((e) => {
                return (
                  <Product key={e.id} photo={e.img} name={e.name} type={e.category} price={e.price} item={e.id} click={() => { currentSaleList(e) }} />
                )
              })
          )
        }
         
          </ul>        
        <div className="shop-right">
            
          <Cart bag={currentSale} total={cartTotal} click={() => { RemoverCart()}}>
            {currentSale.map((e) => {
              return (
                <Cardcart unique={e.id} imgcart={e.img} title={e.name} typefood={e.category} click={() => { remove(e) }} />
              )
            })}
          </Cart>          
        </div>
      </section>
    </>

  )
}

export default Homepage;