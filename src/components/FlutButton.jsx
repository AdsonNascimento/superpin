import './FlutButton.scss'
import icon from '../assets/icon-whatsflut.svg'

function FlutButton() {
  return (
    <a target='_blank' rel="noreferrer" href='https://api.whatsapp.com/send/?phone=55558422261346&text=Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20de%20solicitar%20um%20or%C3%A7amento!&app_absent=0' className='flut-button'>
      <img src={icon} alt="botão WhatsApp" />
    </a>
  )
}

export default FlutButton;