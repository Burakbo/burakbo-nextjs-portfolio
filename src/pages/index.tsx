import type { NextPage } from 'next'
import Header from '../components/header'
import styles from '../SCSS/modules/Home.module.scss'
import Hero from "../components/hero";
import Footer from "../components/footer";
import Projects from "../components/projects";
import ThemeSwitch from "../components/themeswitch";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
          <Header/>
          <ThemeSwitch/>
          <Hero/>
          <Projects/>
      </main>
        <Footer/>
    </div>
  )
}

export default Home
