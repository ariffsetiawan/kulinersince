import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kuliner Since</title>
        <meta name="description" content="kulinersince, khazanah kuliner di nusantara yang setidaknya sudah bertahan 20 tahun atau lebih hingga sekarang." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.kulinersince.com/">KulinerSince!</a>
        </h1>

        <p className={styles.description}>
          Khazanah kuliner di nusantara yang setidaknya sudah bertahan 20 tahun atau lebih hingga sekarang.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://arifsetiawan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Arif Setiawan
        </a>
      </footer>
    </div>
  )
}
