import './Vamos.scss'
import icon1 from '../assets/icon1-superpin.svg'
import icon2 from '../assets/icon2-superpin.svg'
import icon3 from '../assets/icon3-superpin.svg'

function Vamos() {

  return (
    <section id='vamos'>
      <div className='content-align'>

        <div className='icon'>
          <img src={icon1} alt="pintura" />
          <img src={icon2} alt="limpeza" />
          <img src={icon3} alt="construção" />
        </div>
        <h3>Vamos nos conhecer melhor?</h3>
        <p>Entre em contato agora mesmo para buscarmos a <br />melhor solução para sua obra!</p>

        <a target='_blank' rel="noreferrer" className='btn-p' href="https://api.whatsapp.com/send/?phone=55558422261346&text=Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20de%20solicitar%20um%20or%C3%A7amento!&app_absent=0">Solicitar orçamento</a>
      </div>
    </section>
  )
}

export default Vamos