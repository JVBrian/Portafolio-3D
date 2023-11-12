import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        ¡Hola, soy
        <span className='font-semibold mx-2 text-white'>Brian</span>
        <br />
        Un desarrollador web de Colombia.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Trabajé con muchas empresas <br /> y adquirí muchas habilidades en el camino
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Aprende más
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Lideré varios proyectos con éxito a lo largo de los años. <br /> ¿Curioso sobre el impacto?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visita mi portafolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        ¿Necesitas un proyecto hecho o buscas a un desarrollador? <br/> Estoy a solo unos pocos clics de distancia
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Hablemos
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
