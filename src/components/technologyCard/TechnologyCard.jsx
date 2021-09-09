import './TechnologyCard.scss';

const TechnologyCard = ({ technology }) => {
  return (
    <span key={technology} className='technology'>
      {technology}
    </span>
  );
};

export default TechnologyCard;
