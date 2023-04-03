import './style.css'

function Cardcart({ imgcart, title, typefood, click, unique }) {
  return (
    <div className='card-cart' key={unique}>
      <div className='product'>
        <div className='card-photo'><img src={imgcart} alt={title} /></div>
        <div className='food'>
          <h2>{title}</h2>
          <h3>{typefood}</h3>         
        </div>        
      </div>
      <button onClick={click}>Remover</button>
    </div>
  )
}

export default Cardcart;