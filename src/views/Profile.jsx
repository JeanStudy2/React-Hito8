import Button from 'react-bootstrap/Button';
import NavBar from '../components/Navbar';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useEffect } from 'react';


let Profile = () =>{

    const { email, getUser, logout} = useContext(UserContext)

    useEffect(() =>{

        getUser()

    }, [])

    return(
        <>
            <NavBar/>
            <div className='mx-auto d-flex justify-content-evenly align-items-center my-3'>
                {email? <p className='m-0 mx-3'>{email}</p>: 'No estas autenticado'}
                <Button variant="dark" onClick={logout}>Cerrar Sesion</Button>
            </div>
        </>
    )
}

export default Profile