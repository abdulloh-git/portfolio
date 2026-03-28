import { Route, Routes } from 'react-router-dom'
import "./components/scss/main.scss"
import Navbar from './pages/Navbar/Navbar'
import Home from './pages/Home/Home'
import Contact from "./pages/Contact/Contact.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import Skills from "./pages/Skills/Skills.jsx"
import Footer from './pages/Footer/Footer.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
