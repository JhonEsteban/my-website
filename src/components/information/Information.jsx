import './Information.scss';

const Information = () => {
  return (
    <>
      <h1 className='info__title'>
        <span className='name'>Jhon Esteban Herrera </span>
        <span className='job'>Desarrollador JavaScript FullStack (MERN)</span>
      </h1>

      <p className='info__description'>
        Apasionado por las tecnologías web, poseo habilidades en JavaScript
        (Frontend y Backend), puedo crear interfaces Responsive Web Design y
        aplicaciones de tipo SPA. También APIS Restful con Node.js
      </p>
    </>
  );
};

export default Information;
