import { useDispatch } from 'react-redux';

import { searchActions } from '../../store/search-slice';

import classes from './ListItem.module.scss';

const ListItem = ({ data }) => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    const eventTarget = e.target.innerText;
    dispatch(searchActions.setSearchHandler(eventTarget));
  };

  const {
    company,
    position,
    image,
    featured,
    level,
    location,
    newOffer,
    postedAt,
    role,
    languages,
    contract,
  } = data;

  return (
    <li className={featured ? classes['featured-li'] : ''}>
      <img src={image} alt={company} />
      <div>
        <div className={classes.company}>
          <h2 onClick={searchHandler}>{company}</h2>
          {newOffer ? <span className={classes.new}>'New!'</span> : null}
          {featured ? (
            <span className={classes.featured}>'Featured'</span>
          ) : null}
        </div>
        <h3 onClick={searchHandler}>{position}</h3>
        <div className={classes.contract}>
          <span onClick={searchHandler}>{postedAt}</span>
          <span onClick={searchHandler}>{contract}</span>
          <span onClick={searchHandler}>{location}</span>
        </div>
      </div>
      <div className={classes.more}>
        <span onClick={searchHandler}>{role}</span>
        <span onClick={searchHandler}>{level}</span>
        {languages.map((language) => (
          <span onClick={searchHandler} key={language}>
            {language}
          </span>
        ))}
      </div>
    </li>
  );
};

export default ListItem;
