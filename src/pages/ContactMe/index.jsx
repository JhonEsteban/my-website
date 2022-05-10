import './styles.scss';

const gif = process.env.REACT_APP_GIF;

const ContactMe = () => {
  return (
    <section className='contact-me animated fadeIn'>
      <article className='heading'>
        <h1 className='heading__title'>
          ¿Tienes una oferta de trabajo o proyecto freelance para mí?
        </h1>

        <img src={gif} className='heading__gif' alt='' />
      </article>

      <article className='footer'>
        <h2 className='footer__title'>👇 Puedes hablarme por aquí 👇</h2>

        <a
          href='https://www.linkedin.com/in/jhon-esteban-herrera'
          target='_blank'
          rel='noreferrer'
          className='footer__link'
        >
          LinkedIn
        </a>
      </article>
    </section>
  );
};

export default ContactMe;
