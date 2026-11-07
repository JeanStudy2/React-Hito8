import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavBar from '../components/Navbar';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

let Register = () =>{


  const {register, email, setEmail, setPassword, password, password2, setPassword2} = useContext(UserContext)

    return(
        <>
        <div className='bg-dark'>
          <NavBar/>
          <Form className='w-50 mx-auto py-4' onSubmit={register}>
          <h2 className='text-center text-light'>Registro</h2>
            <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" placeholder="correo@dominio.com" value={email} onChange={(e)=> setEmail(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control type="password" placeholder="********" value={password2} onChange={(e) => setPassword2(e.target.value)} required/>
            </Form.Group>
            <div className='text-center'>
              <Button variant="success" type="submit" >Registrarse</Button>
            </div>
          </Form>
        </div>
        </>
    )
}

export default Register