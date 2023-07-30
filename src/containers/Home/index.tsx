import { FC } from "react"
import { Header } from "../../components/Header"
import Introduction from "../../components/Introduction"
import InitialButtons from "../../components/InitialButtons"
import Technologies from "../../components/Technologies"


const Home: FC = () => {

  return (
    <>
      <Header />
      <Introduction />
      <InitialButtons />
      <Technologies />
    </>
  )
}

export default Home