import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) =>{

  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  
  const login = async (e) =>{
    e.preventDefault()
  
  try {
    
    const res = await fetch ('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
      })

    const data = await res.json()
    setToken(data.token)
    setEmail('')
    setPassword('')

    if (data.error){
      throw new Error(data.error)
      } 
  }

  catch (error) {
    console.log(error)
    alert(error)
    }
  }

  const register = async (e) =>{
    e.preventDefault()

  if (password.length >= 6 && password2.length >= 6){
  if (password === password2){
  
  try {
    
    const res = await fetch ('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
      })

    const data = await res.json()

    setEmail(data.email)
    setToken(data.token)
    setPassword('')
    setPassword2('')


    if (data.error){
      throw new Error(data.error)
      } 
  }

  catch (error) {
    console.log(error)
    alert(error)
    }

  }else{
        alert('Las contraseñas no coinciden')
      }
      
    }else{
      alert('La contraseña debe tener minimo 6 caracteres')
    }
  }

  const getUser = async () =>{

    try {
        const res = await fetch('http://localhost:5000/api/auth/me',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                }
        })
        const data = await res.json()
        console.log(data)
        if (data.error){
            throw new Error(data.error)
        }
        
        setEmail(data.email)

    } catch (error) {
        console.log(error)
        alert(error)
    }
}

  const logout = () =>{setToken(''); setEmail('')}
  
    return(

      <UserContext.Provider value={{token, setToken, email, password, setPassword, setEmail, login, getUser, logout, register, password2, setPassword2}}>
      {children}
      </UserContext.Provider>
    )

}

export default UserProvider