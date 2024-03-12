import Link from "next/link";
import React from "react";
import { useState } from "react";
import styles from '../../styles/Home.module.css';



function Tareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState({ titulo: "", descripcion: "" });
  const [editarTarea, setEditarTarea] = useState(null);
  const [filCompletado, setFilCompletado] = useState("todo");
  const [ordenarPor, setOrdenarPor] = useState("fecha");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaTarea((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const añadirTarea = () => {
    if (nuevaTarea.titulo.trim() !== "") {
      setTareas((prevTasks) => [...prevTasks, nuevaTarea]);
      setNuevaTarea({ titulo: "", descripcion: "" });
    }
  };

  const editarLasTareas = (index) => {
    setEditarTarea(index);
    setNuevaTarea(tareas[index]);
  };

  const actualizarTarea = () => {
    if (editarTarea !== null) {
      const actualizarTareas = [...tareas];
      actualizarTareas[editarTarea] = nuevaTarea;
      setTareas(actualizarTareas);
      setEditarTarea(null);
      setNuevaTarea({ titulo: "", descripcion: "" });
    }
  };

  const completarTarea = (index) => {
    const actualizarTareas = [...tareas];
    actualizarTareas[index].completada = !actualizarTareas[index].completada;
    setTareas(actualizarTareas);
  };

  const eliminarTarea = (index) => {
    const actualizarTareas = tareas.filter((_, i) => i !== index);
    setTareas(actualizarTareas);
  };
  const filtrarTareas = tareas.filter((tarea) => {
    if (filCompletado === "completada") {
      return tarea.completada;
    } else if (filCompletado === "incompleta") {
      return !tarea.completada;
    }
    return true;
  });

  const tareaOrdenada = [...filtrarTareas].sort((a, b) => {
    if (ordenarPor === "titulo") {
      return a.titulo.localeCompare(b.titulo);
    } else if (ordenarPor === "fecha") {
      return new Date(a.creadoEn) - new Date(b.creadoEn);
    }
    return 0;
  });
  return (
    <>
      <div className={styles.container}>

        <div className={styles.maintareas}>

          <h1 className={styles.tareash1}>Lista de tareas</h1>

          <div>

            <h2 className={styles.tareash2}>Añadir nueva tarea</h2>

            <input
              type="text"
              name="titulo"
              placeholder="Titulo"
              value={nuevaTarea.titulo}
              onChange={handleInputChange}
              className={styles.inputtareas}
            />
            <input
              type="text"
              name="descripcion"
              placeholder="Descripcion"
              value={nuevaTarea.descripcion}
              onChange={handleInputChange}
              className={styles.inputtareas}
            />
            <button 
              onClick={añadirTarea}
              className={styles.btnagregartarea}
              >Añadir Tarea</button>
            {editarTarea !== null && (
              <button onClick={actualizarTarea}>Actualizar Tarea</button>
            )}
          </div>

          <h2 className={styles.tareash2}>Lista de tareas</h2>
          <div className={styles.divfiltrado}>
            Filtro:
            <select
              value={filCompletado}
              onChange={(e) => setFilCompletado(e.target.value)}
              className={styles.select}
            >
              <option value="todo">Todo</option>
              <option value="completada">Completada</option>
              <option value="incompleta">Incompleta</option>
            </select>
          </div>
          <div className={styles.divfiltrado}>
            Ordenar por:
            <select
              value={ordenarPor}
              onChange={(e) => setOrdenarPor(e.target.value)}
              className={styles.select}
            >
              <option value="fecha">Fecha</option>
              <option value="titulo">Titulo</option>
            </select>
          </div>

          <ul className={styles.listatareas}>
            {tareaOrdenada.map((tarea, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={tarea.completada}
                  onChange={() => completarTarea(index)}

                />
                <span>
                  {tarea.titulo},{tarea.descripcion}
                </span>
                <button onClick={() => editarLasTareas(index)}>Editar</button>
                <button onClick={() => eliminarTarea(index)}>Borrar</button>
              </li>
            ))}
          </ul>
          <div>
            <Link href="/" className={styles.registrarse}>Cerrar sesión</Link>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Tareas;
