import React, { useState, useEffect } from 'react';
import  { collection, getFirestore, getDocs } from 'firebase/firestore';
import './listacliente.css';


import firebase from '../../Config/firebase';

function ListaClientes(){

    const [clientes, setClientes] = useState([]);
    

    useEffect(() => {
      let listaCli = [];
        const fetchData = async () => {
          const db = getFirestore(firebase);
          const clientesRef = collection(db, 'clientes');
          const snapshot = await getDocs(clientesRef);
          
          snapshot.forEach((doc) => {
            listaCli.push({
                id: doc.id,
                nome: doc.data().nome,
                email: doc.data().email,
                fone: doc.data().fone
          });
        
        })
        setClientes(listaCli)
        
        };
        fetchData();
      }, []);
    

    return <table className="table table-hover table-bordered">
            <thead>
            <tr className="table-secondary">
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">Telefone</th>
            </tr>
            </thead>
            <tbody>

            {
                clientes.map((cliente) => {
                    return <tr key={cliente.id}>
                    <th scope="row">{cliente.id}</th>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.fone}</td>
                </tr>
                })
            }
                       
            
            </tbody>
        </table>
}

export default ListaClientes;