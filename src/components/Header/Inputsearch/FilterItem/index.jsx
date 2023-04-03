import Product from "../../../product";


function ItemFilter({ filtro, list }) {
  
  filtro > 0 && (
    filtro.map((e) => {
      return (
        <Product key={e.id} photo={e.img} name={e.name} type={e.category} price={e.price} item={e.id} click={() => { list(e) }} />
      )
    }))}

export default ItemFilter;