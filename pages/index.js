import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
  <>
  
      <Head>
        <meta name="description" content="Aplicacion para ordenar tus tareas"/>
        <meta name="keywords" content="Tareas, orden, lista"/>
        <title>Tiburones Tareas</title>
      </Head>

      <section className={styles.container}>

        <main className={styles.main} >

          <div className={styles.center}>
            <Image src="/img/tiburon.jpg"
            width={125}
            height={150}
            alt='Tiburon'
            className={styles.tiburon}></Image>
          </div>

          <h1> ¡Bienvenido Tiburón!</h1>

          <h2 className={styles.h2}>Estamos listos para ordenar tus tareas</h2>
          
          <div className={styles.enlaces}>
            
              <Link href="/registro" className={styles.links}>Registrate</Link>

              <Link href="/login" className={styles.links}>Logueate</Link>
            
          </div>
          
          
        </main>

      </section>
      

      </>
  )
}
