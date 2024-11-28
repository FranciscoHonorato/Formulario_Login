import { Link } from "react-router-dom"

function Nav() {
   return (
      <>
         <div id='cssmenu'>
            <ul>
               <li> <Link to='/cadastrar'><span>Cadastrar</span> </Link></li>
               <li> <Link to='/atualizar'><span>Atualizar</span> </Link></li>
               <li> <Link to='/excluir'><span>Excluir</span> </Link></li>
               <li> <Link to='/consultar'><span>Consultar</span> </Link></li>
               <li className='last'><Link to='/'><span>Logar</span> </Link></li>
            </ul>
         </div>
      </>
   )
}

export default Nav
