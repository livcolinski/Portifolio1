import './Header.css'
import logo from './logo.png'
import { Link } from "react-router-dom"

function Header(){
    return(
        <header>
          <div>
            <ul><li>
               <Link to="/"><img src={logo} className='barbie-img'></img></Link>
              </li></ul>
               
            </div>
          <ul>
            
            
          </ul>
          

            <nav>
                <ul>
                <li>
              
              <Link to="/projetos">Projetos</Link>

            </li>
            <li>
              
              <Link to="/pedidos">Pedidos</Link>

            </li>
            <li>
              
              <Link to="/sobre">Sobre</Link>

            </li>
            <li>
              
              <Link to="/contato">Contato</Link>

            </li>
                </ul>
            </nav>
        </header>

        

    )
}
export default Header