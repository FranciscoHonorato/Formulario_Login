import React from "react";
import Atualizar from './Atualizar'
import Cadastrar from "./Cadastrar";
import Consultar from "./Consultar";
import Escluir from './Excluir'
import Home from "./Home";

import {BrowserRouter , Routes, Route} from 'react-router-dom'

function Rotas(){
   return(
      <>
      <BrowserRouter>
       <Routes >
         <Route path='/' element={<Home />} ></Route>
       </Routes>
      </BrowserRouter>
      </>
   )
}

export default Rotas