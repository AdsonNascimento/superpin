import './Poruqe.scss'
import about1 from '../../assets/sobre/about.webp'
import about2 from '../../assets/sobre/about2.webp'
import element from '../../assets/sobre/elemento.svg'

function Porque() {
  return ( 
    <section id='porque'>
      <div className="content-align">
      <div className='porque-text'>
        <h2>Por que existimos?</h2>
      
        <p>Sabemos da dificuldade em encontrar bons serviços, de modo geral, no mercado.</p>
        <p>É raro encontrar profissionais compromissados em entregar serviços no prazo acordado, que estejam comprometidos com as necessidades dos clientes e, sobre tudo, com a qualidade do serviço prestado.</p>
        <p>Surgimos para mudar esse cenário e nos tornarmos referência em atendimento de excelência, confiabilidade e competência em serviços da construção civil.</p>
      
        <a href="https://api.whatsapp.com/send/?phone=558422261346&text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20uma%20d%C3%BAvida.&app_absent=0" className="btn-p">
          Gostária de tirar alguma dúvida?
        </a>
      </div>
      <div className='porque-img'>
        <img className='img-1' src={about1} alt="" />
        <img className='img-2' src={about2} alt="" />
        <img className='element' src={element} alt="" />
      </div>
      </div>
    </section>
  );
}

export default Porque;