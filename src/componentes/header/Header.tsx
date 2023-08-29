import './Header.css'
function Header(){
    return(
        <header>
          <img src='/src/componentes/header/logo.png' className='barbie-img'></img>
            <nav>
                <ul>
                <li>
              <a href="#" className='botao'>Projetos</a>
            </li>
            <li>
              <a href="#" className='botao'>Pedidos </a>
            </li>
            <li>
              <a href="#" className='botao'>Sobre</a>
            </li>
            <li>
              <a href="#" className='botao'>Contato</a>
            </li>
                </ul>
            </nav>
        </header>

        

    )
}
export default Header