import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import About from '../components/About'
import Projects from '../components/Projects'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Darmawan | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
