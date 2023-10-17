import { useState } from "react";
import Projeto from "../projeto/Projeto";
import './Main.css'


type ProjetoType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("")

    const projeto:ProjetoType[] = [
        {
            id:1,
            titulo:"Simple:",
            sinopse:"Desenho simples",
            imagem:"/simples.jpeg"
        },
        {
            id:2,
            titulo:"Shaded:",
            sinopse:"Desenho complexo",
            imagem:"/colorido.jpeg"
        },
        {
            id:3,
            titulo:"Detailed:",
            sinopse:"Desenho detalhado",
            imagem:"/detalhado.jpeg"
        }

    ]
    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
           <div className='Myname'>
            <h1>
            Lɪᴠɪᴀ Mᴀʀɪᴀ Tᴏᴜʀᴏ
            </h1>
          </div>
            <div className="pesquisa">
                
                <p className="buscar">Buscar Projeto</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
                </div>
            </div>



            



            <main className="content-main">
                {projeto.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto:ProjetoType)=>
                    <Projeto key={projeto.id} 
                           titulo={projeto.titulo} 
                           sinopse={projeto.sinopse} 
                           imagem={projeto.imagem}
                    />
                    )
                }

                <div className="container">
         
  
                <div className="descricao">
                <h2 className='sobre'>Sobre a Artista</h2>
                <p className="sou">Sou uma artista independente,tenho o objetivo de compartilhar meu trabalho 
                para que cheguem a pessoas com bom senso crítico e interessadas pela arte.</p>


                <div className='vasinho' >
                
                </div>
  </div>
</div>

                
            </main>
        </>
    )
}