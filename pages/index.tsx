import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Login } from '../component/Login/Login'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lotus</title>
        <meta name="description" content="Lotus app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login></Login>
      
    </div>
  )
}

export default Home
