import './style.css'

export function Header({ children }) {

  return (
    <header className='top'>
    <div className='top-center'>
      {children}
    </div>    
  </header>)

}