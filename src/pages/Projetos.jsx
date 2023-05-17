import './Marista.scss';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import ImageGallery from '../tools/ImageGallery.jsx'
import FlutButton from '../components/FlutButton.jsx';


function Projetos() {

  const id = [
    {
      name: "marista",
      categoria: "SERVIÇO DE PINTURA",
      titulo: "Colégio Marista - Natal/RN",
      descicao: "Participamos da construção da obra com +10.000 m² de superfície pintada",
      urlCapa: "../fotos-projeto-marista/fachadaMarista.jpg",
      artigo: "Realizamos a obra durante o ano de 2022 em parceria com a Lopez Marinho Engenharia e Construções, construtora com sede no Rio de Janeiro, e o Colégio Marista. Através da indicação de um cliente, a Lopes Marinho entrou em contato conosco apresentando a obra e os seus desafios: curto prazo para execução e necessidade de alto padrão de qualidade. Sabemos que a pintura é a última etapa da obra e, por isso, muitas vezes acaba absorvendo atrasos de outras etapas para a obra ser entregue no tempo certo. O desafio de entregar a obra no prazo era devido a necessidade do colégio estar pronto para as aulas do ano letivo de 2023. O Colégio Marista é uma rede de escola tradicional no país e conhecida pela sua qualidade, o serviço de pintura a ser executado na sua nova escola não poderia ser diferente. Foram utilizados as melhores técnicas e os melhores materiais na obra resultando em um excelente acabamento.",
      data: "2023",
      local: "Colégio Marista",
      localResponsavel: "Lopez Marinho",
      urlImagens: "../fotos-projeto-marista"
    },
    {
      name: "parque-eolico",
      categoria: "SERVIÇO DE PINTURA",
      titulo: "Parque Eólico",
      descicao: "Serviço executado em João Câmara/RN, cidade com a maior produção de energia eólica do país",
      urlCapa: "../fotos-parque-eolico/parqueEolico.jpg",
      artigo: "Terceirize os serviços de manutenção da sua empresa e concentre-se no que é mais importante para o seu negócio. Com nossos serviços, você pode ter a tranquilidade de saber que a sua propriedade estará em boas mãos e que os trabalhos serão executados de forma eficiente e profissional. Utilizamos nos nossos serviços de pintura as melhores técnicas e materiais para garantir um acabamento perfeito e duradouro, utilizando tintas e revestimentos de alta qualidade para proteger as superfícies contra danos e condições ambientais adversas. Ao terceirizar os serviços de pintura, sua empresa economiza tempo e dinheiro, pois não precisa se preocupar em contratar e treinar funcionários para realizar essas tarefas. Além disso, terá a certeza de que a nossa equipe profissional utilizará os equipamentos de segurança necessários para garantir a proteção dos trabalhadores e do ambiente de trabalho. Entre em contato conosco hoje mesmo para saber mais sobre como podemos ajudá-lo a manter a suas instalações em perfeitas condições.",
      data: "SET 2023",
      local: "João Câmara/RN",
      localResponsavel: "",
      urlImagens: "../fotos-projeto-parque-eolico"
    },
    {
      name: "quadra-poliesportiva",
      categoria: "SERVIÇO DE PINTURA",
      titulo: "Quadra poliesportiva",
      descicao: "Quadra poliesportiva",
      urlCapa: "../fotos-projeto-quadra-poliesportiva/quadraPoliesportiva.jpg",
      artigo: "Um bom resultado de pintura de quadra quadra poliesportiva é constituído por 3 pilares: PREPARAÇÃO da superfície, aplicação de MATERIAL com tempo de cura respeitado e MÃO DE OBRA especializada no serviço.A primeira tarefa é avaliar o substrato e tratar as possíveis imperfeições.Ele possui fissuras, rachaduras ou buracos?O contra-piso está curado?Como estão as juntas de dilatação?Se tratar de repintura, possui desplacamentos?Para cada patologia existe uma solução. Entre em contato conosco para uma avaliaçãoNo mercado existem diversas tintas para a pintura de quadras, se destacam:Tinta a base de resina acrílica para piso;Tinta a base de resina epóxi; eTinta a base de resina poliuretana.A tinta a ser escolhida depende exposição da quadra a intermpéries, do uso, esportes praticados e durabilidade esperada.",
      data: "JUL 2022",
      local: "Natal/RN",
      localResponsavel: "",
      urlImagens: "../fotos-projeto-quadra-poliesportiva"
    },
    {
      name: "pintura-industrial",
      categoria: "SERVIÇO DE PINTURA",
      titulo: "Pintura industrial",
      descicao: "Serviço realizado em câmaras frias em uma industria do Rio Grande do Norte.",
      urlCapa: "../fotos-projeto-pintura-industrial/pinturaIndustrial.jpg",
      artigo: "Mantenha o seu ambiente industrial em perfeitas condições com os nossos serviços de pintura profissional. Com nossos serviços, você pode garantir que a sua propriedade industrial esteja protegida contra corrosão, desgaste e condições climáticas adversas. Além disso, a pintura regular das superfícies pode ajudar a prolongar a vida útil do seu equipamento, reduzindo a necessidade de reparos e substituições.Não deixe a aparência e a integridade do seu ambiente industrial serem comprometidas. Entre em contato conosco hoje mesmo e descubra como nossos serviços de pintura industrial podem ajudá-lo a manter sua propriedade em perfeitas condições.",
      data: "AGO 2022",
      local: "PARNAMIRIM/RN",
      localResponsavel: "",
      urlImagens: "../fotos-projeto-pintura-industrial"
    },
    {
      name: "pintura-estacionamento",
      categoria: "SERVIÇO DE PINTURA",
      titulo: "Pintura de estacionamento",
      descicao: "Somos especializados em serviço de pintura viária",
      urlCapa: "../fotos-projeto-pintura-estacionamento/pinturaEstacionamento.jpg",
      artigo: "Na Superpin, somos especialistas em serviços de pintura para grandes superfícies, incluindo pintura de demarcação de estacionamentos, estradas, rodovias, heliportos e aeroportos. Nós oferecemos soluções de alta qualidade e eficientes para atender às necessidades de nossos clientes, com uma equipe altamente treinada e equipamentos de última geração.Nossos serviços incluem:Pintura de estacionamentos: Um dos diferencias de shoppings, lojas, clínicas, escritórios e demais empresas em geral é oferecer estacionamento para seus clientes. O estacionamento, assim como a fachada, é o cartão de visita da organização da sua empresa.Um estacionamento regular com sinalizações adequadas, acessível para deficientes físicos e idosos de acordo, transmite ao cliente zelo e segurança.Pintura de estradas e rodovias: Somos especialistas em sinalização de trânsito. Realizamos pintura com tinta própria para tráfego de faixas contínuas e seccionadas, faixas de pedestres, sinalizações horizontais etc.Pintura de heliportos e aeroportos: Com nossa experiência em sinalização precisa, garantimos um pouso e decolagem seguros em heliportos e aeroportos obedecendo a legislação e o projeto da pista de pouso.Nosso objetivo é oferecer serviços de alta qualidade, eficientes e personalizados para atender às necessidades específicas de nossos clientes. Estamos comprometidos em garantir a segurança e a funcionalidade dessas superfícies críticas por meio de soluções de pintura de alta qualidade. Entre em contato conosco hoje mesmo para saber mais sobre nossos serviços de pintura para grandes superfícies e como podemos ajudar a manter suas instalações seguras e com um aspecto renovado.",
      data: "2022-2023",
      local: "Rio Grande do Norte",
      localResponsavel: "",
      urlImagens: "../fotos-projeto-pintura-estacionamento"
    },
    {
      name: "manutencao-fachada",
      categoria: "SERVIÇO DE PINTURA",
      titulo: "MANUTENÇÃO DE FACHADA",
      descicao: "Solução completa de impermeabilização, pintura e limpeza",
      urlCapa: "../fotos-projeto-manutencao-fachada/pinturaFachada.jpg",
      artigo: "A fachada de um prédio é a primeira impressão que os visitantes e clientes têm da sua empresa, e é por isso que é tão importante mantê-la em perfeitas condições. Uma fachada bem conservada e limpa pode melhorar significativamente a aparência do seu prédio, trazer mais visibilidade para sua empresa e até mesmo aumentar o valor de mercado da propriedade.Nós oferecemos serviços de manutenção de fachada para garantir que sua propriedade esteja sempre em bom estado. Com nossa equipe de profissionais altamente qualificados e experientes, podemos realizar a limpeza, reparos e pintura necessários para manter a fachada do seu prédio em ótimas condições.A manutenção regular da fachada pode ajudar a evitar problemas como infiltrações, descascamento da pintura, formação de mofo e outros danos causados por fatores externos, como poluição e intempéries. Com nossos serviços, podemos garantir que a fachada do seu prédio esteja sempre bem cuidada, limpa e atraente.Além disso, nossos serviços de pintura podem dar uma nova aparência para o seu prédio, modernizando e atualizando a fachada para que ela fique em sintonia com a imagem que sua empresa deseja transmitir. Nós utilizamos os melhores materiais e técnicas para garantir um resultado final de alta qualidade e durabilidade.Não deixe que a aparência da fachada do seu prédio comprometa a imagem da sua empresa. Entre em contato conosco hoje mesmo para saber mais sobre nossos serviços de manutenção de fachada e como podemos ajudá-lo a manter seu prédio sempre em boas condições.",
      data: "MAR 2023",
      local: "Natal/RN",
      localResponsavel: "",
      urlImagens: "../fotos-projeto-manutencao-fachada"
    },
    {
      name: "manutencao-escolar",
      categoria: "MANUTENÇÃO DE ESCOLAS",
      titulo: "MANUTENÇÃO DE ESCOLAS",
      descicao: "Diversas escolas contam com a Superpin para realizar a manutenção períodica das suas instalações",
      urlCapa: "../fotos-projeto-manutencao-escolar/manutencaoEscola.jpg",
      artigo: "A manutenção periódica da pintura em escolas é essencial para garantir um ambiente seguro, agradável e acolhedor para estudantes, professores e funcionários. Uma escola com uma aparência bem cuidada pode melhorar a experiência educacional de todos os envolvidos, além de transmitir uma mensagem positiva para a comunidade.A empresa Superpin oferece soluções completas para a manutenção periódica de pintura em escolas, incluindo pintura de paredes, tetos, portas, janelas, grades, pisos e demais áreas do ambiente escolar. Além disso, a Superpin também oferece serviços de reparo de paredes e tetos com fissuras, rachaduras e outras imperfeições.Nossa equipe é composta por profissionais experientes e altamente qualificados em pintura e reparo de superfícies. Utilizamos somente materiais de alta qualidade e técnicas avançadas de pintura para garantir uma durabilidade excepcional e um acabamento de qualidade superior.Com a manutenção periódica da pintura em escolas, os problemas relacionados à aparência desgastada ou danificada podem ser resolvidos de maneira rápida e eficiente, garantindo um ambiente agradável e seguro para estudantes e funcionários. A Superpin pode ajudar a escola a manter sua aparência impecável e a promover um ambiente educacional positivo para todos. Entre em contato conosco hoje mesmo para saber mais sobre nossos serviços de manutenção de pintura em escolas.",
      data: "2022-2023",
      local: "Natal/RN",
      localResponsavel: "",
      urlImagens: "../fotos-projeto-manutencao-escolar"
    },
    {
      name: "impermeabilicao-muros",
      categoria: "SERVIÇO DE PINTURA",
      titulo: "Impermeabilização de muros",
      descicao: "Tratamento de infiltração em muros e paredes externas",
      urlCapa: "../fotos-projeto-impermeabilizacao-muros/impermeabilizacao-muros.webp",
      artigo: "Você já se deparou com problemas de infiltração em muros e paredes externas da sua casa ou empresa? Se sim, sabe o quanto esses problemas podem ser frustrantes e danosos para a estrutura do seu imóvel. A boa notícia é que a nossa empresa de pintura pode ajudá-lo a solucionar esses problemas com nossos serviços de impermeabilização profissional.A impermeabilização é uma técnica utilizada para proteger as superfícies contra a penetração de água e umidade, prevenindo danos e evitando a formação de bolor e mofo. Nós utilizamos os melhores materiais e técnicas de impermeabilização para garantir que as superfícies sejam protegidas contra a ação do tempo e do clima, além de evitar problemas de infiltração.Ao optar pelos nossos serviços de impermeabilização de muros e paredes externas, você pode ter a tranquilidade de saber que a sua propriedade estará protegida contra problemas de infiltração, garantindo a integridade da estrutura e a sua durabilidade.Não deixe que os problemas de infiltração coloquem em risco a integridade do seu imóvel. Conte com a nossa equipe de pintura profissional para realizar a impermeabilização das superfícies externas, protegendo sua propriedade contra os danos causados pela umidade e pelos agentes externos. Entre em contato conosco hoje mesmo para saber mais sobre nossos serviços de impermeabilização e como podemos ajudá-lo.",
      data: "JAN 2023",
      local: "NATAL/RN",
      localResponsavel: "",
      urlImagens: "../fotos-projeto-impermeabilizacao-muros"
    },
    {
      name: "piso-epoxi",
      categoria: "SERVIÇO DE PINTURA",
      titulo: "Piso epóxi em piso de escola infantil",
      descicao: "Um dos serviços que mais nos orgulhamos",
      urlCapa: "../fotos-projeto-pixo-epoxi/pisoEpoxi.jpg",
      artigo: "A escola é um ambiente onde as crianças passam grande parte do seu tempo, por isso é importante que ele seja acolhedor e estimulante para o seu desenvolvimento. E uma das formas de proporcionar isso é através do uso de cores vibrantes e alegres. Foi pensando nisso que realizamos o serviço de pintura epóxi em um pátio de uma escola infantil, utilizando diversas cores e criando um ambiente lúdico e divertido para as crianças.O revestimento epóxi é um material resistente, durável e de fácil manutenção, ideal para ambientes de alto tráfego como escolas. Além disso, a possibilidade de aplicação de diversas cores em um mesmo espaço, permitiu criar desenhos e jogos divertidos, como um jogo da velha ou uma amarelinha, estimulando o desenvolvimento cognitivo e motor das crianças.Estudos comprovam que as cores influenciam diretamente no comportamento e no humor das pessoas, e isso não é diferente para as crianças. Cores vibrantes e alegres estimulam a criatividade e a imaginação, tornando o aprendizado mais lúdico e prazeroso. Além disso, cores específicas podem ser usadas para estimular diferentes aspectos do desenvolvimento infantil, como o verde que estimula a concentração e a calma, ou o amarelo que estimula a alegria e a comunicação.Com o nosso serviço de pintura epóxi, sua escola pode se transformar em um ambiente alegre e estimulante, contribuindo para o desenvolvimento das crianças e criando um ambiente acolhedor e agradável para todos. Entre em contato conosco para saber mais sobre nossos serviços de pintura epóxi e como podemos transformar o ambiente da sua escola.",
      data: "FEV 2023",
      local: "Natal/RN",
      localResponsavel: "",
      urlImagens: "../fotos-projeto-pixo-epoxi"
    },
    {
      name: "piso-atletismo",
      categoria: "SERVIÇO DE PINTURA",
      titulo: "Pista de atletismo",
      descicao: "",
      urlCapa: "../fotos-projeto-piso-atletismo/pistaAtletismo.jpg",
      artigo: "Se você é responsável pela manutenção de esportes de alto rendimento sabe o quanto é importante manter as superfícies em perfeitas condições para garantir a segurança e o desempenho dos atletas. E um dos aspectos fundamentais para isso é a pintura adequada. Nós oferecemos serviços de pintura especializados em pistas de atletismo, quadras poliesportivas, ginásios, campos de futebol society com grama artificial ou natual.A pintura desses espaços é essencial para garantir a segurança dos usuários e a durabilidade da superfície. Além disso, a escolha adequada de cores pode impactar diretamente no desempenho dos atletas, como no caso das pistas de atletismo que utilizam cores específicas para indicar as faixas de corrida e obstáculos.Com nossa experiência e conhecimento técnico, podemos orientá-lo na escolha das cores e materiais adequados para cada ambiente, garantindo um resultado final de qualidade e durabilidade. Tenha uma instalação esportiva profissional, conte com nossa equipe de profissionais qualificados e experientes para realizar um trabalho de excelência.Entre em contato conosco hoje mesmo para saber mais sobre nossos serviços.",
      data: "MAR 2023",
      local: "Natal/RN",
      localResponsavel: "",
      urlImagens: "../fotos-projeto-piso-atletismo"
    },
    {
      name: "manutencao-alambrado",
      categoria: "SERVIÇO DE PINTURA",
      titulo: "MANUTENÇÃO DE ALAMBRADOS",
      descicao: "Substituição de tubulação comprometida, tratamento anticorrosivo e pintura",
      urlCapa: "../fotos-projeto-manutencao-alambrado/manutencaoAlambrado.jpg",
      artigo: "Alambrados possuem grade utilidade para garantir segurança e privicidade de locais. Também muito utilizado em campos e quadras poliesportivas. Por sua maioria utilização ser em ambiente externo, é necessário estar atento a presença de corrosão e desgaste de pintura.Nós oferecemos serviços de manutenção de alambrados com substituição de tubulações comprometidas, aplicação de fundo anticorrosivo e pintura com tinta esmalte sintético, epóxi ou poliuretana. Utilizamos os melhores materiais e técnicas para garantir a durabilidade e a qualidade do acabamento. Com nossa equipe de profissionais altamente qualificados e experientes, podemos garantir a realização de um trabalho de qualidade e eficiente.Com nossa experiência e conhecimento técnico, podemos orientá-lo na escolha das melhores opções de pintura e manutenção para o seu alambrado, garantindo um resultado final de qualidade e durabilidade.Não deixe a segurança e a privacidade do seu local em risco, conte com nossa equipe de profissionais qualificados e experientes para realizar um trabalho de excelência na manutenção e pintura do seu alambrado. Entre em contato conosco hoje mesmo para saber mais sobre nossos serviços de manutenção de alambrados e pintura, e como podemos ajudá-lo a manter o seu alambrado em perfeitas condições.",
      data: "MAR 2023",
      local: "Natal/RN",
      localResponsavel: "",
      urlImagens: "../fotos-projeto-manutencao-alambrado"
    },
    // {
    //   name: "",
    //   categoria: "",
    //   titulo: "",
    //   descicao: "",
    //   urlCapa: "..//.jpg",
    //   artigo: "",
    //   data: "",
    //   local: "",
    //   localResponsavel: "",
    //   urlImagens: "../"
    // }
  ]

  const { name } = useParams();

  const project = id.find((item) => item.name === name);
  // const basePath = project ? project.urlImagens : '';

  if (!project) {
    return <div>Projeto não encontrado.</div>;
  }

  const imageBasePath = project.urlImagens;

  return (
    <main>
      <section id="cliente">
        <div className='cliente-cabecario'>
          <span className='cliente-categoria'>{project.categoria}</span>
          <h2>{project.titulo}</h2>
          <p className='cliente-descricao'>{project.descicao}</p>

          <img src={project.urlCapa} alt="#" />
        </div>

        <div className='cliente-main'>
          <h3>SOBRE A OBRA</h3>

          <div className='cliente-artigo'>
            <p className='cliente-text'>
              {project.artigo}
            </p>

            <aside className='cliente-info'>
              <div>
                <h4>DATA</h4>
                <span>{project.data}</span>
              </div>

              <div>
                <h4>LOCAL</h4>
                <span>{project.local}</span><br />
                <span>{project.localResponsavel}</span>
              </div>
            </aside>
          </div>
        </div>
        <ImageGallery basePath={imageBasePath} />

        <Link className='btn-p' to="/">
          <ArrowLeft size={20} color="#ffffff" />
          Voltar para início
        </Link>

        <FlutButton />

      </section>

      <section id='imagens'>

      </section>

    </main>
  );
}

export default Projetos;