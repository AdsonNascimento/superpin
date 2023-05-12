import { Link } from "react-router-dom";

import './galeria.scss';

import img1 from '../assets/projetos/fachada-marista.webp'
import img2 from '../assets/projetos/manutencao-parque-eolico.webp'
import img3 from '../assets/projetos/pintura-industrial.webp'
import img4 from '../assets/projetos/quadra-poliesportiva.webp'
import img5 from '../assets/projetos/pintura-estacionamento.webp'
import img6 from '../assets/projetos/manutencao-fachada.webp'
import img7 from '../assets/projetos/manutencao-escola.webp'
import img8 from '../assets/projetos/impermeabilizacao-muros.webp'
import img9 from '../assets/projetos/piso-epoxi.webp'
import img10 from '../assets/projetos/pintura-pista-atletismo.webp'
import img11 from '../assets/projetos/manutencao-alambrado.webp'
import Vamos from "../components/Vamos";


function Servicos() {

  const servicos = [
    {
      id: 1,
      titulo: "Obra Colégio Marista - Natal/RN",
      categoria: "Serviço de Pintura",
      urlCategoria: "#",
      image: img1,
    },
    {
      id: 2,
      titulo: "Manutenção de parque eólico",
      categoria: "Serviço de Manutenção",
      urlCategoria: "#",
      image: img2,
    },
    {
      id: 3,
      titulo: "Pintura Industrial",
      categoria: "Serviço de Pintura",
      urlCategoria: "#",
      image: img3,
    },
    {
      id: 4,
      titulo: "Pintura de quadra poliesportiva",
      categoria: "Serviço de Pintura",
      urlCategoria: "#",
      image: img4,
    },
    {
      id: 5,
      titulo: "Pintura de estacionamento",
      categoria: "Serviço de Pintura",
      urlCategoria: "#",
      image: img5,
    },
    {
      id: 6,
      titulo: "Manutenção de fachada",
      categoria: "MANUTENÇÃO DE FACHADA",
      urlCategoria: "#",
      image: img6,
    },
    {
      id: 7,
      titulo: "SERVIÇO DE MANUTENÇÃO",
      categoria: "Manutenção de escolas",
      urlCategoria: "#",
      image: img7,
    },
    {
      id: 8,
      titulo: "IMPERMEABILIZAÇÃO",
      categoria: "Impermeabilização de muros",
      urlCategoria: "#",
      image: img8,
    },
    {
      id: 9,
      titulo: "Piso epóxi em escola infantil",
      categoria: "Serviço de Pintura",
      urlCategoria: "#",
      image: img9,
    },
    {
      id: 10,
      titulo: "Pista de atletismo",
      categoria: "Serviço de Pintura",
      urlCategoria: "#",
      image: img10,
    },
    {
      id: 11,
      titulo: "Manutenção de alambrado",
      categoria: "SERRALHERIA E PINTURA",
      urlCategoria: "#",
      image: img11,
    },
  ]

  return (
    <main>
      <section id="servicos">
        <div className="content-align">
          <p>SERVIÇOS PRESTADOS</p>
          <h2>Conheça alguns dos nossos serviços prestados</h2>

          <div className="servicos">
            {servicos.map((servico, id) => (
              <Link to={servico.urlCategoria} className="servico" key={id}>
                <img src={servico.image} alt={servico.titulo} />
                <span>{servico.categoria}</span>
                <h3>{servico.titulo}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Vamos />
    </main>
  );
}

export default Servicos;