import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchActions } from '../../store/search-slice';

import classes from './Input.module.scss';

const Input = () => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const searchPhrase = useSelector((state) => state.search.searchPhrase);

  const searchHandler = (e) => {
    const eventTarget = e.target.value;
    dispatch(searchActions.setSearchHandler(eventTarget));
    inputRef.current.value = '';
  };

  const searchHandlerKey = (e) => {
    const eventTarget = e.target.value;
    if (e.keyCode === 13) {
      dispatch(searchActions.setSearchHandler(eventTarget));
      inputRef.current.value = '';
    } else {
      return;
    }
  };

  const clearPhrases = () => {
    dispatch(searchActions.setClearPhrases());
  };

  const deleteItemHandler = (deletedItem) => {
    const newsearchPhrase = searchPhrase.filter((item) => item !== deletedItem);
    dispatch(searchActions.setSearchParams(newsearchPhrase));
  };

  return (
    <div className={classes['inputs-div']}>
      <ul>
        {searchPhrase.map((item) => (
          <li className={classes.filled} key={item}>
            <p>{item}</p>
            <button
              className={classes.delete}
              onClick={() => deleteItemHandler(item)}
            >
              &#x2715;
            </button>
          </li>
        ))}
        <input
          onBlur={searchHandler}
          onKeyUp={searchHandlerKey}
          placeholder="Search or click on the item from the list..."
          ref={inputRef}
        />
      </ul>
      <button className={classes.clear} onClick={clearPhrases}>
        Clear
      </button>
    </div>
  );
};

export default Input;
