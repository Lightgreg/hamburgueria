import './style.css'

function Search({click, state}) {
  return (
    <form>
      <div className='search-square'>
        <input type="text" onChange={state} placeholder='Digitar pesquisa' />
        <button type='button' onClick={click} className='search-btn'>Pesquisar</button>
      </div>
    </form>
  )
}

export default Search;