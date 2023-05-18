import { GlobalStyles } from "./GlobalStyles"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import ScrollArrow from "./components/ScrollArrow/ScrollArrow"

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Skills/>
      <Contact/>
      <Footer/>
      <ScrollArrow/>
    </>
  )
}