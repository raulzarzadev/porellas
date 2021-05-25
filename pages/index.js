import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Por Ellas </title>
        <meta name="description" content="Organización de eventos deportivos con causa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>porellas.org</h1>
        <h4>Pronto ...</h4>
      </main>
    </div>
  )
}
