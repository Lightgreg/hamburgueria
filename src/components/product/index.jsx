import './style.css'

function Product({ photo, name, type, price, item, chave, click }) {
  return (
    <div className='product-square' key={chave}>
      <div className='photo-back'>
      <div className='photo'>
        <img src={photo} alt={name} />
        </div>
      </div>
      <div className='product-description'>
        <h3>{name}</h3>
        <span>{type}</span>
        <span className='price'>R$ {parseInt(price)},00</span>
        <button value={item} onClick={click} >Adicionar</button>
      </div>
    </div>
  )
}

export default Product;