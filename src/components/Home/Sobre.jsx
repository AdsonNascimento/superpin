import AboutVideo from '../../assets/video/sobre.mp4'
import CapaSobre from '../../assets/capa-video.svg'
import './Sobre.scss'
import { PaintBrushBroad, Virus, Drop, Buildings, ArrowRight } from "@phosphor-icons/react";
import { Link } from 'react-router-dom'

function Sobre() {

  return (
    <section id='sobre'>
      <div className="content-align">
        <div className='about-text'>
          <h2>Sobre a Superpin</h2>
          <p>Superpin é a solução inteligente para sua obra!</p>
          <p>Dispomos de um time especializado, com gerenciamento e execução em alta performance para entregarmos o melhor resultado.</p>

          <ul>
            <li>
              <PaintBrushBroad size={20} color="#ffffff" className='sobre-before-icon' />
              <a href='https://superpin.com.br/pintura.html'>
                Serviços de pintura
                <ArrowRight size={18} color="#2f4f8c" />
              </a>
            </li>
            <li>
              <Virus size={20} color="#ffffff" className='sobre-before-icon' />
              <a href='https://superpin.com.br/limpeza.html'>
                Serviços de limpeza
                <ArrowRight size={18} color="#2f4f8c" />
              </a>
            </li>
            <li>
              <Drop size={20} color="#ffffff" className='sobre-before-icon' />
              <a href='https://superpin.com.br/impermeabilizacao.html'>
                Impermeabilização
                <ArrowRight size={18} color="#2f4f8c" />
              </a>
            </li>
            <li>
              <Buildings size={20} color="#ffffff" className='sobre-before-icon' />
              <a href='https://superpin.com.br/fachada.html'>
                Manutenção de fachada
                <ArrowRight size={18} color="#2f4f8c" />
              </a>
            </li>
          </ul>

          <Link className='btn-p' to="/sobre">Porque e existimos</Link>

        </div>
        <video
          className='about-video'
          src={AboutVideo}
          poster={CapaSobre}
          onClick={(event) => {
            event.target.setAttribute("controls", true);
          }}
        >
          Esté formato de vídeo não é suportado pelo seu navegador
        </video>
      </div>
    </section>
  )
}

export default Sobre