import { useState } from 'react'

function Home() {

   const [login, setLogin] = useState('')
   const [senha, setSenha] = useState('')
   const [users, setUsers] = useState([])
 
   const data = new Date()
 
 
   function handleSubmit(e) {
     e.preventDefault()
     const user = {
       login: login,
       senha: senha
     }
 
     setUsers([...users, user])
     setLogin('')
     setSenha('')
     console.log(users)
   }

   
   return (
      <>
         <div id='conteudo'>
            <form >
               data: {data.getFullYear()}
               <h1>
                  ÁREA RESTRITA
               </h1>
               Login:
               <input onChange={(e) => setLogin(e.target.value)} value={login} />
               Senha:
               <input onChange={(e) => setSenha(e.target.value)} type="password" value={senha} />
               <input type='submit' value="Entrar" onClick={(e) => handleSubmit(e)} />
            </form>
         </div>
      </>
   )

}
export default Home