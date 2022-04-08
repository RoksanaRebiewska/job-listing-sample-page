import classes from './BackgroundHeader.module.scss';
import BackgroundImageDesktop from '../../assets/bg-header-desktop.svg';

const BackgroundHeader = () => {
  return (
    <div className={classes['background-header']}>
      <img src={BackgroundImageDesktop} alt="background" />
    </div>
  );
};

export default BackgroundHeader;
