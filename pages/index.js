import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My company|home</title>
        <meta name='Keywords' content='My company'/>
      </Head>

    
    <div >
      {/* <Head>   this code also works. but write this above div tag
        <title> My company | home</title>
        <meta name='Keywords' content='my company' />

      </Head> */}
      
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
      <Link href="/careers" className={styles.btn}>
      See Current Jobs
      </Link>
     
    </div>
    </>
  )
}
