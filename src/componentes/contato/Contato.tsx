import "./Contato.css"
//import { Link } from 'react-router-dom'
import {useState} from 'react';

function Contato() {
  function mudaNome(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setNome(e.target.value)
    }
    function mudaEmail(e:React.ChangeEvent<HTMLInputElement>){
      console.log(e.target.value)
      setEmail(e.target.value)
      }
      function mudaMsg(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
        }

    const [Nome,setNome] = useState("")
    const [Email,setEmail] = useState("")
    const [Msg,setTexto] = useState("")








    return (
      <main className="contato">
        <h3>Tem alguma Pergunta?</h3>
        <div className="contatos-container">
          <h2 className="entre">Entre em Contato</h2>
          <p className="envie">Envie-nos uma mensagem:</p>
          <form className="contatos-form">
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome" onChange={mudaNome} /><p className="mudanome">seu Nome:{Nome}</p>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Seu email" onChange={mudaEmail}/>
              <p className="mudaemail"> seu email:{Email}</p>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" onChange={mudaMsg}></textarea><p className="mudaMsg"> sua Mensagem:{Msg}</p>
              
            </div>
            <button type="submit">Enviar</button>
            <h1 className="linha"></h1>
            <h2 className="follow">Follow me on</h2>

            <div className="social">
            <button className="insta">Intagram</button>
            <button className="twitter">Twitter</button>
            <button className="th">@Threads</button>
            </div>
          </form>
        </div>

        

        





      </main>
    );
  }
  export default Contato