import './styles.scss';

const cv = process.env.REACT_APP_CV_LINK;

const DownLoadCvButton = () => {
  return (
    <a href={cv} className='cv-button' target='_blank' rel='noreferrer'>
      Descargar CV
    </a>
  );
};

export default DownLoadCvButton;
