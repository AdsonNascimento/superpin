// import './Projetos.scss';
import './Projetos.css';

import img01 from '../../assets/projetos/impermeabilizacao-muros.webp';
import img02 from '../../assets/projetos/manutencao-parque-eolico.webp';
import img03 from '../../assets/projetos/quadra-poliesportiva.webp';
import img04 from '../../assets/projetos/pintura-industrial.webp';
import img05 from '../../assets/projetos/piso-epoxi.webp';
import img06 from '../../assets/projetos/pintura-pista-atletismo.webp';
import img07 from '../../assets/projetos/manutencao-alambrado.webp';
import img08 from '../../assets/projetos/fachada-marista.webp';

function Projetos() {
  const projetos = [
    {
      imagem: img01,
      projeto: 'Impermeabilização de muros',
      categoria: 'Serviço de Impermeabilização',
      urlCategoria: 'https://superpin.com.br/impermeabilizacao.html'
    },
    {
      imagem: img02,
      projeto: 'Manutenção de parque eólico',
      categoria: 'Serviço de Pintura',
      urlCategoria: 'https://superpin.com.br/pintura.html'
    },
    {
      imagem: img03,
      projeto: 'Quadra poliesportiva',
      categoria: 'Serviço de Pintura',
      urlCategoria: 'https://superpin.com.br/pintura.html'
    },
    {
      imagem: img04,
      projeto: 'Pintura Industrial',
      categoria: 'Serviço de Pintura',
      urlCategoria: 'https://superpin.com.br/pintura.html'
    },
    {
      imagem: img05,
      projeto: 'Piso epóxi em escola infantil',
      categoria: 'Serviço de Pintura',
      urlCategoria: 'https://superpin.com.br/pintura.html'
    },
    {
      imagem: img06,
      projeto: 'Pintura de pista de atletismo',
      categoria: 'Serviço de Pintura',
      urlCategoria: 'https://superpin.com.br/pintura.html'
    },
    {
      imagem: img07,
      projeto: 'Manutenção de alambrado',
      categoria: 'Serviço de serralheria e pintura',
      urlCategoria: 'https://superpin.com.br/fachada.html'
    },
    {
      imagem: img08,
      projeto: 'Colégio Marista - Natal/RN',
      categoria: 'Serviço de Pintura',
      urlCategoria: 'https://superpin.com.br/pintura.html'
    },
  ]

  return (
    <section id='projetos'>
      <div className="content-align">
        <h2>Conheça alguns dos nossos serviços prestados</h2>

        <div id="wrapper">
          <div id="carousel">
            <div id="content">

              {projetos.map((projeto, index) => {
                return (
                  <a className="item" href={projeto.urlCategoria} key={index}>
                    <img src={projeto.imagem} alt={`Imagens da contrução do projeto ${projeto.projeto}`} />
                    <p>{projeto.projeto}</p>
                    <span>{projeto.categoria}</span>
                  </a>
                );
              })}

            </div>
          </div>

          <button 
          id="prev" 
          aria-label='voltar'
          onClick={(event) => {
            const gap = 30;
            const carousel = document.getElementById("carousel");
            // const content = document.getElementById("content");
            carousel.scrollBy(-1 * (300 + gap), 0);
            if (carousel.scrollWidth !== 0) {
              event.target.click.style.display = "block";
            }
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
            </svg>
          </button>

          <button 
          id="next" 
          aria-label='avançar'
          onClick={(event) => {
            const gap = 30;
            const carousel = document.getElementById("carousel");
            // const content = document.getElementById("content");
            carousel.scrollBy(300 + gap, 0);
            if (carousel.scrollWidth !== 0) {
              event.target.click.style.display = "block";
            }
          }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projetos