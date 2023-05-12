import './CompreCard.scss';
import logoSecundaria from '../../assets/logo-secundaria.svg';
import { Check, Minus, X } from "@phosphor-icons/react";


function CompreCard() {
  return (
    <section id="compre-card">
      <div className="content-align">
        <div className="compre-card-text">
          <h2>Quem compara, escolhe a <span>Superpin</span></h2>
          
          <p>Obra é sinônimo de dor de cabeça para muitos. Com a Superpin, sua obra começa e termina no prazo, com excelência em qualidade, segurança e atendimento.</p>
       
          <a target='_blank' rel="noreferrer" className='btn-p' href="https://api.whatsapp.com/send/?phone=558422261346&text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20or%C3%A7amento.&app_absent=0">
            Solicitar orçamento
          </a>
        </div>
        <div className="compre-card-cards">
          <div className="card">
            <div className="header-card">
              <span>Outras empresas</span>
            </div>
            <ul>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>Fornecimento de mão de obra</p>
              </li>
              <li>
                <X className='x' size={18} color="#ffffff" />
                <p>Fornecimento de material, acessórios e equipamentos</p>
              </li>
              <li>
                <X className='x' size={18} color="#ffffff" />
                <p>Estrutura organizacional para grandes obras</p>
              </li>
              <li>
                <Minus className='minus' size={18} color="#ffffff" />
                <p>Contratação de funcionários por MEI</p>
              </li>
              <li>
                <X className='x' size={18} color="#ffffff" />
                <p>Supervisão das obras por engenheiro civil</p>
              </li>
              <li>
                <X className='x' size={18} color="#ffffff" />
                <p>Garantia de até 3 anos</p>
              </li>
              <li>
                <X className='x' size={18} color="#ffffff" />
                <p>Garantia de até 3 anos</p>
              </li>
            </ul>
          </div>

          <div className="card superpin-card">
          <div className="header-card">
            <img src={logoSecundaria} alt="" />
          </div>
            <ul>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>Fornecimento de mão de obra</p>
              </li>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>Fornecimento de material, acessórios e equipamentos</p>
              </li>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>Estrutura organizacional para grandes obras</p>
              </li>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>Contratação de funcionários por MEI</p>
              </li>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>Supervisão das obras por engenheiro civil</p>
              </li>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>Garantia de até 3 anos</p>
              </li>
              <li>
                <Check className='check' size={18} color="#ffffff" />
                <p>Pagamento em até 10x sem juros</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompreCard;