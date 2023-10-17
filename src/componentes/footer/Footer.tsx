import './Footer.css'
import logo from './../header/logo.png'
export default function Footer() {
  return (
    <footer>
         <img src={logo} className='barbie-img2'></img>
         


  <div className="footer-section">
    <h2>Links Importantes</h2>
    <ul>
      <li><a href="#">Suporte</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  </div>
 
  <div className="footer-section">
    <h2>Contato</h2>
    <p className='cont'>Email: livia.touro@estudante.ifms.edu.br</p>
    <p className='cont'>Telefone: (00)4002-8922</p>
  </div>
 
  <div className="footer-section">
    <h2>Redes Sociais</h2>
    <ul>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Instagram</a></li>
    </ul>
  </div>
</footer>




  )
}


