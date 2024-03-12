import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../../styles/Home.module.css';

export function Formulario({setUser}) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const router = useRouter();
  
    const handleSubmit = (e) => {
        e.preventDefault();
  
        if (name === "" || password === "") {
          setError(true);
          return;
        }
  
        setError(false);
        setRegistroExitoso(true);
        
    };

    if (registroExitoso){
        router.push("/tareas");
    }

    return(
        
        <div>

            <form 
            className={styles.contenedorform}
            onSubmit={handleSubmit}>
                
                <h1 className={styles.h1login}>Login</h1>

                    <div>
                        <input 
                            type="text"
                            placeholder="Usuario"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className={styles.inputs}
                        />
                        <br/>
                        <input 
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={styles.inputs}
                        /> 
                    </div>
                    <button className={styles.botoniniciar}>Iniciar Sesión</button>
                

                    {error && <p className={styles.error}>¡Todos los campos son obligatorios!</p>}
                                    
                    <Link href="/registro" className={styles.registrarse}>Registrate aquí</Link>
                </form>
            </div>
        
        
    );
}
export default Formulario;
