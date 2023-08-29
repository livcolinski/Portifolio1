import './Main.css'
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
    <img src='/src/componentes/main/simples.jpeg' className='simples-img'></img>
    <p>Lineart Fullbody.</p>
  </div>

  <div className="project">
    <h2>Projeto Detalhado</h2>
    <img src='/src/componentes/main/colorido.jpeg' className='simples-img'></img>
    
    <p>Halfbody Detailed.</p>
  </div>

  <div className="project">
    <h2>Projeto Colorido</h2>
    <img src='/src/componentes/main/detalhado.jpeg' className='simples-img'></img>
    <p>Halfbody Simple Color.</p>
  </div>
         </div>



         <div className="container">
         <img src='/src/componentes/main/eu.png' className='eu-img'></img>
  
  <div className="descricao">
    <h2 className='sobre'>Sobre a Artista</h2>
    <p>Sou uma artista independente,tenho o objetico de compartilhar meu trabalho 
      para que cheguem a pessoas com bom senso crítico.</p>
  </div>
</div>







     </main>  
    )

}
export default Main