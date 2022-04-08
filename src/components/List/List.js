import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import classes from './List.module.scss';
import ListItem from '../ListItem/ListItem';
import ApiService from '../../Api.service';

const List = () => {
  const [jobOffers, setJobOffers] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchPhrase = useSelector((state) => state.search.searchPhrase);

  const getJobOffers = async () => {
    let jobList;
    setLoading(true);

    jobList = await ApiService.httpGet();

    setJobOffers(jobList);
    setLoading(false);
  };

  useEffect(() => {
    getJobOffers();
  }, []);

  const filterOptions = (item, key) => {
    return (
      Object.values(item)
        .map((item) => item.toString().toLowerCase())
        .includes(searchPhrase[key].toLowerCase()) ||
      Object.values(item.languages)
        .map((item) => item.toString().toLowerCase())
        .includes(searchPhrase[key].toLowerCase())
    );
  };

  let filteredList = jobOffers;

  if (searchPhrase.length > 0) {
    for (let i = 0; i < searchPhrase.length; i++) {
      filteredList = filteredList.filter((item) => filterOptions(item, i));
    }
  }

  return (
    <section className={classes.list}>
      <ul>
        {filteredList.length > 0 ? (
          filteredList.map((data) => <ListItem data={data} key={data.id} />)
        ) : loading ? (
          <p>Loading offers</p>
        ) : (
          <p>No offers found for given criteria</p>
        )}
      </ul>
    </section>
  );
};

export default List;
