import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import logo from "../../assets/logo.png"


function SignUp() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext)

    function hadnleSubmit(e){
        e.preventDefault();
        if(nome !== '' && email !== '' && password !== ''){
          signUp(email, password, nome)
        }
    }

    return (
      <div className='container-center'>
        <div className='login'>
            <div className='logo-area'>
                <img  src={logo} alt="sistema logo"/>
            </div>
            <form onSubmit={hadnleSubmit}>
                <h1>Cadastre-se</h1>
                <input type="text" placeholder='Seu nome' value={nome} onChange={ (e) => setNome(e.target.value)} />
                <input type="text" placeholder='email@gmail.com' value={email} onChange={ (e) => setEmail(e.target.value) } />
                <input type="password" placeholder='*****' value={password} onChange={ (e) => setPassword(e.target.value)}/>
                <button type='submit'>{loadingAuth ? "Carregandoo..." : 'Cadastrar'}</button>
            </form>
        <Link to="/">Já possui uma conta? Entre</Link>

        </div>
       
      </div>
    );
  }
  
  export default SignUp;