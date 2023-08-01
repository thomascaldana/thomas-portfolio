import { FC } from "react"
import { Header } from "../../components/Header"
import Introduction from "../../components/Introduction"
import InitialButtons from "../../components/InitialButtons"
import Technologies from "../../components/Technologies"
import Line from "../../components/Line"
import Projects from "../../components/Projects"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"



const Home: FC = () => {

  return (
    <>
      <Header />
      <Introduction />
      <InitialButtons />
      <Technologies />
      <Line />
      <Projects />
      <Contact />
      <Line />
      <Footer />
    </>
  )
}

export default Home