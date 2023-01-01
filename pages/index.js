import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
        <meta name='keywords' content='home dashboard get started' />
        <meta name='description' content='página de exemplo para Next.JS' />
      </Head>
      <div>
        <h1 className={styles.title}>Hello World, Next.JS!</h1>
      </div>
    </>
  )
}
