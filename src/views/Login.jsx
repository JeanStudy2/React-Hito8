
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from '../components/Navbar';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

let Login = () =>{

  const {email, setEmail, password, setPassword, login} = useContext(UserContext)


    return(
        <>
          <div className='bg-dark'>
            <NavBar/>
            <Form className='w-50 mx-auto py-4' onSubmit={(e)=>login(e)}>
            <h2 className='text-center text-light my-4'>Inicio de Sesion</h2>
                <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control type="email" placeholder="correo@dominio.com" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <div className='text-center'>
                  <Button variant="success" type="submit" >Iniciar Sesion</Button>
                </div>
            </Form>
          </div>
        </>
    )
}

export default Login