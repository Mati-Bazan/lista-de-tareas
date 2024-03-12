import Link from "next/link";
import React, {useState} from "react";
import styles from '../../styles/Home.module.css';


function FormRegistro() {
const [usuario, setUsuario] = useState('');
const [contraseña, setContraseña] = useState('')
const [confirmarContraseña, setConfirmarContraseña] = useState('')
const [registroExitoso, setRegistroExitoso] = useState(false);

    const handleInputChange = (e) => {
    const{id , value} = e.target;
    if(id === "usuario"){
        setUsuario(value);
    }
    if(id === "contraseña"){
        setContraseña(value);
    }
    if(id === "confirmarContraseña"){
        setConfirmarContraseña(value);
    }
}
    const handleRegister = (e) => {
        e.preventDefault();

        if(usuario.trim()=== '' || contraseña.trim() === '') {
            console.log('Debes completar todos los campos');
            return;
        }
        if(contraseña === confirmarContraseña){
            console.log('Registro exitoso:', usuario, contraseña);
        setUsuario('');
        setContraseña('');
        setConfirmarContraseña('');
        setRegistroExitoso(true);
        }
        else {
            alert('Las contraseñas no coinciden')
        }
    }

    return (
        <div>
            <form className={styles.contenedorregistro} onSubmit={handleRegister}>
                <h1 className={styles.h1login}>Registrate</h1>
                <input 
                    type="text" 
                    id="usuario" 
                    value={usuario} 
                    onChange = {(e) => handleInputChange(e)} placeholder="Usuario"
                    className={styles.inputs}
                />
                
                <input
                    type="password" 
                    id="contraseña" 
                    value={contraseña} 
                    onChange = {(e) => handleInputChange(e)} 
                    placeholder="Contraseña"
                    className={styles.inputs}
                />
                
                <input
                    type="password" id="confirmarContraseña"
                    value={confirmarContraseña} onChange = {(e) => handleInputChange(e)}placeholder="Confirmar Contraseña" 
                    className={styles.inputs}
                />

                <div class="footer">
                    <button type="submit"
                    className={styles.botoniniciar}>Registrarse</button>
                </div>
                {registroExitoso && (
                <p className={styles.error}> ¡Registro exitoso!
                    <Link href="/login" className={styles.registrarseregistro}>Iniciá sesión</Link>
                </p>
                )}
            </form>
        </div>     
    ); 
};

export default FormRegistro;

