import './Home.scss'
import Header from '../components/Header.jsx'
import Banner from '../components/Home/Banner.jsx'
import Sobre from '../components/Home/Sobre.jsx'
import Marcas from '../components/Home/Marcas.jsx'
import Projetos from '../components/Home/Projetos.jsx'
import Vamos from '../components/Home/Vamos.jsx'
import Footer from '../components/Footer.jsx'
import FlutButton from '../components/FlutButton.jsx'

function App() {
  return (
    <>
      <Header />
      <main id='main'>
        <Banner />
        <Sobre />
        <Marcas />
        <Projetos />
        <Vamos />
        <FlutButton />
      </main>
      <Footer />
    </>
  )
}

export default App
