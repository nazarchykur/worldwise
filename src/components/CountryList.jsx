import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

import styles from "./CountryList.module.css";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <Message message="Add you first city by clicking on a city on the map" />
    );
  }

  // 1) Get unique countries
  // const countries = cities.reduce((array, city) => {
  //   if (!array.map((el) => el.country).includes(city.country))
  //     return [...array, { country: city.country, emoji: city.emoji }];
  //   else return array;
  // }, []);

  // 2) Get unique countries
  const countrySet = new Set();

  const countries = cities.reduce((array, city) => {
    if (!countrySet.has(city.country)) {
      countrySet.add(city.country);
      return [...array, { country: city.country, emoji: city.emoji }];
    } else return array;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
