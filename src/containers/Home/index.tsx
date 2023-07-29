import { FC } from "react"
import { Header } from "../../components/Header"
import Introduction from "../../components/Introduction"
import InitialButtons from "../../components/InitialButtons"


const Home: FC = () => {

  return (
    <>
      <Header />
      <Introduction />
      <InitialButtons />
    </>
  )
}

export default Home