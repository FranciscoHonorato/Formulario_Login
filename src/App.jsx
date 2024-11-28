
import './App.css'
import Nav from './components/Nav'
import Rodape from './components/Rodape'
import Home from './pages/Home'
import Atualizar from './pages/Atualizar'
import Cadastrar from "./pages/Cadastrar";
import Consultar from "./pages/Consultar";
import Excluir from './pages/Excluir'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/atualizar' element={<Atualizar />} />
          <Route path='/Cadastrar' element={<Cadastrar />} />
          <Route path='/consultar' element={<Consultar />} />
          <Route path='/excluir' element={<Excluir />} />
        </Routes>
      </BrowserRouter>
      <Rodape />
    </>
  )
}

export default App
