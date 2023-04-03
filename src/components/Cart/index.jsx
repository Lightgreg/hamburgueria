import Totalcar from './CartTotal';
import './style.css'

function Cart({ children, bag ,total , click }) {
  return (
    <>
        <section className='cart' >
          <div className='title-cart'>
            <p>Carrinho de compras</p>            
        </div>
      </section>
      {bag.length ? (
        <>
          <ul className='list-cart'>
            {children}
          </ul>      
          <Totalcar total={total} click={click} />
        </>

      ) : (        
        <div className='no-bag'>
            <h2>Sua sacola está vazia</h2>
            <span>Adicione itens</span>
          </div>         
      )}
          </>
  )

}

export default Cart;