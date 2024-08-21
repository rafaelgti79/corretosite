import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//Importar páginas
import Site from "./site/site.jsx";
import Login from './app/Login/login.jsx';
import NovaConta from './app/NovaConta/novaconta.jsx';
import ResetSenha from './app/ResetSenha/resetsenha.jsx';
import Home from './app/Home/home.jsx';
import NovoCliente from './app/NovoCliente/novocliente.jsx';

function App(){
    return <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Site/>} />
    <Route exact path='/app' element={<Login/>} />
    <Route exact path='/app/novaconta' element={<NovaConta/>} />
    <Route exact path='/app/resetsenha' element={<ResetSenha/>} />
    <Route exact path='/app/home' element={<Home/>} />
    <Route exact path='/app/novocliente' element={<NovoCliente/>} />
    </Routes>
    </BrowserRouter>;
  }

export default App;