
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import  Projects  from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import './index.css'


function App() {
  return (
    <>
    <Navbar/>
    <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Testimonials/>
        <Contact/>
    </main>

    </>
  
  
  )
}

export default App
