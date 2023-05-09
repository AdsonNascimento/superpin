import './Equipe.scss'
import { Check } from "@phosphor-icons/react";
import imgMarco from '../../assets/equipe/marco.webp'
import imgFelipe from '../../assets/equipe/felipe.webp'
import imgAugusto from '../../assets/equipe/augusto.webp'
import iconEquipe from '../../assets/equipe/icon-equipe.svg'

function Equipe() {
  return (
    <section id="equipe">

      <div className='degrade'>

      </div>
    
      <div className="content-align">

        <div className="equipe-text">

          <img src={iconEquipe} alt="" />
          <h2>Conheça nossa estrutura para atender a sua empresa</h2>
        </div>

        <div className="equipe-cards">
        <div className="card">
          <div className="header-card">
            <img src={imgAugusto} alt="" />
            <h3>Carlo Augusto</h3>
            <span>ENGENHEIRO CIVIL</span>
          </div>
            <ul>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>+20 anos de experiência na área</p>
              </li>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>Responsável técnico por +1 milhão de m² de superfície pintada</p>
              </li>
            </ul>
          </div>

        <div className="card">
          <div className="header-card">
            <img src={imgMarco} alt="" />
            <h3>Marco Aurélio</h3>
            <span>GERENTE DE OBRAS</span>
          </div>
            <ul>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>+15 anos de experiência na área</p>
              </li>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>+40 torres de apartamentos entregues e 4 supermecados</p>
              </li>
            </ul>
          </div>

          <div className="card">
          <div className="header-card">
            <img src={imgFelipe} alt="" />
            <h3>Felipe Engracio</h3>
            <span>ENGENHEIRO DE PRODUÇÃO</span>
          </div>
            <ul>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>+13 anos de experiência em gestão de empresas</p>
              </li>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>Resposável administrativo e financeiro</p>
              </li>
            </ul>
          </div>
        </div>
        </div>
    </section>
  );
}

export default Equipe;