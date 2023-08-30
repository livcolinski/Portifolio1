import './Main.css'
import Simples from './simples.jpeg'
import Colorido from './colorido.jpeg'
import Detalhado from './detalhado.jpeg'
import Eu from './eu.png'
import Flor from './cherry blossom-amico.svg'

function Main(){
    return(
     <main>
        <div className='Myname'>
            <h1>
            Lɪᴠɪᴀ Mᴀʀɪᴀ Tᴏᴜʀᴏ
            </h1>
        </div>

        <div className='Projetos'>

        <div className="project">
    <h2>Projeto Simples</h2>
    <img src={Simples} className='simples-img'></img>
    <p>Lineart Fullbody.</p>
  </div>

  <div className="project">
    <h2>Projeto Colorido</h2>
    <img src={Colorido} className='simples-img'></img>
    
    <p>Halfbody Detailed.</p>
  </div>

  <div className="project">
    <h2>Projeto Detalhado</h2>
    <img src={Detalhado}className='simples-img'></img>
    <p>Halfbody Simple Color.</p>
  </div>
         </div>



         <div className="container">
         <img src={Eu} className='eu-img'></img>
  
  <div className="descricao">
    <h2 className='sobre'>Sobre a Artista</h2>
    <p>Sou uma artista independente,tenho o objetivo de compartilhar meu trabalho 
      para que cheguem a pessoas com bom senso crítico e interessadas pela arte.</p>


      <div className='vasinho' >
      <img  className='flor'src={Flor} alt="sherry" />
      </div>
  </div>
</div>







     </main>  
    )

}
export default Main