import './SobreSuperpin.scss'
import Header from '../components/Header.jsx'
import Porque from '../components/SobreSuperpin/Porque.jsx'
import CompreCard from '../components/SobreSuperpin/CompreCard.jsx'
import Equipe from '../components/SobreSuperpin/Equipe.jsx'
import Vamos from '../components/Home/Vamos.jsx'
import Footer from '../components/Footer.jsx'
import FlutButton from '../components/FlutButton.jsx'


function SobreSuperpin() {
  return (
    <>
      <Header />
      <main>
        <Porque />
        <CompreCard />
        <Equipe />
        <Vamos />
        <FlutButton />
      </main>
      <Footer />
    </>
  );
}

export default SobreSuperpin;