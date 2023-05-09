import './Banner.scss';
import 'animate.css';
import BannerMobile from '../../assets/banner/banner-mobile.webp';
import BannerDesktop from '../../assets/banner/banner.webp';

function Banner() {
  return (
    <section id="banner">
      <img id='banner-desktop animate__fadeOutLeft' src={BannerDesktop} alt="" />
      <img id='banner-mobile' src={BannerMobile} alt="" />

      <div className="content">
        <h1>Para um super serviço, a Superpin.</h1>

        <p>Soluções inteligentes para sua obra</p>

        <a className='btn-p' href="https://api.whatsapp.com/send/?phone=55558422261346&text=Gostaria%20de%20tirar%20uma%20d%C3%BAvida!&app_absent=0" target='_blanck'>Solicite o orçamento</a>
      </div>
    </section>
  )
}

export default Banner