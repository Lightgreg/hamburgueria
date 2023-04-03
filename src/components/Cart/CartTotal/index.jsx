import './style.css'

function Totalcar({total,click}) {
  return (
    <div className='total-square'>
      <div className='total-title'>
        <span>Total</span>
        <span className='total-value'>R$ {total},00</span>
      </div>
      <button onClick={click}>Remover tudo</button>
    </div>
  )
}


export default Totalcar;