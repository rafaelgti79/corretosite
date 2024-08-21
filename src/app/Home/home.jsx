import React from 'react';
import Navbar from '../Components/Navbar/navbar';
import ListaClientes from '../Components/ListaCliente/listacliente';
import './home.css';
import 'firebase/firestore';


function Home(){
    return <div>
      <Navbar/>
      <div className="container-fluid titulo">
        <h1>Cadastro de Clientes</h1>
        <ListaClientes />
      </div>      
    </div>
  }

export default Home;