// import { Button } from 'react-bootstrap';
import '../../../../front-end-shared/css/Login/Login.css'
import { Link } from 'react-router-dom'

export function Login() {
    return (
        <>
        <div>
            <h1>Crear una cuenta</h1>
            <div className='loginForm'>
                <input type="text" placeholder="Nombre de usuario"/>
                <input type="password" placeholder="Contraseña"/>
            </div>
        </div>
        {/* <Button className='styled-button'>Crear cuenta</Button> */}
        <div>
            <Link to="/login" className='styled-link'>Ya tengo cuenta...</Link>    
            <Link to="/game" className='styled-link'>Jugar como invitado</Link>    
        </div>
        </>
    )
}