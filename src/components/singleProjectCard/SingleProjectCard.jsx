import './SingleProjectCard.scss';

const SingleProjectCard = ({ name, description, image, stack, live, code }) => {
  return (
    <section className='single-project'>
      <a href={live} target='_blank' rel='noreferrer'>
        <img
          src={image}
          className='single-project__image'
          alt={`Imagen del proyecto ${name}`}
          title={name}
        />
      </a>

      <article className='details'>
        <h1 className='details__name'>{name}</h1>
        <p className='details__description'>{description}</p>

        <div className='stack'>
          {stack?.map((tecnology) => (
            <span key={tecnology}>{tecnology} </span>
          ))}
        </div>

        <div className='options'>
          <a
            href={live}
            className='btn btn--one'
            target='_blank'
            rel='noreferrer'
          >
            Ver Proyecto
          </a>

          <a
            href={code}
            className='btn btn--two'
            target='_blank'
            rel='noreferrer'
          >
            Ver Código
          </a>
        </div>
      </article>
    </section>
  );
};

export default SingleProjectCard;
