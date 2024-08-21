import React, {useState} from 'react';
import {Link}  from 'react-router-dom';
import './novaconta.css';

import firebase from '../Config/firebase';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import 'firebase/auth';

function NovaConta(){

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function cadastrarUsuario(){
    const auth = getAuth(firebase);
    setMensagem('');

    if (!email || !senha){
      setMensagem('Informe todos os campos');
      return;
    }

    createUserWithEmailAndPassword(auth, email, senha).then(resultado => {
      alert('Usuário criado com sucesso');
    }).catch(error => {      
      if (error.message === 'Password should be at least 6 characters') {
        setMensagem('A senha deve ter pelo menos 6 caracteres');
      } else if (error.message === 'The email address is badly formatted.') {
        setMensagem('O email não é válido');
      }
      else if (error.message === 'The email address is already in use by another account.') {
        setMensagem('Esse email já está em uso por outra conta');
      }
      else {
        setMensagem('Erro ao criar conta: ' + error.message);
      }
            
    })
  }

    return <div className="d-flex align-items-center text-center form-container">
      <form className="form-signin">
        <img className="mb-4" src="/Images/logo-small2.png" alt="" />
        <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

        <div className="form-floating">
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
          <label htmlFor="floatingInput">E-mail</label>
        </div>

        <div className="form-floating">
          <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
          <label htmlFor="floatingPassword">Senha</label>
        </div>
        
        <button onClick={cadastrarUsuario} className="w-100 btn btn-lg btn-primary" type="button">Criar conta</button>

        {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}

        <div className="login-links mt-5">
          <Link to="/app" className="mx-3">Já tenho uma conta.</Link>
        </div>

        <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por 99 Coders</p>
      </form>
    </div>
  }

export default NovaConta;