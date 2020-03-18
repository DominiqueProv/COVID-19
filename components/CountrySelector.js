import useStats from '../utils/useStats';
import { useState } from 'react';
import Stats from './Stats';
import styled from 'styled-components';
import StatsIndividual from './StatsIndividual';

export default function CountrySelector() {
  const { stats: countries } = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCountry] = useState('CA');
  //if statement for the loader to kick in (!stats) 
  if (!countries) return <p></p>;
  //return someting JSX
  return (
    <>
      <div>
        <Browse>
        <h2>Browse by country</h2>
        <select
          onChange={event => {
            setSelectedCountry(event.target.value);
          }}
        >
          {Object.entries(countries.countries).map(([country, code]) => (
            <option selected={selectedCountry === code}
              key={code}
              value={code}>
              {country}
            </option>
          ))}
        </select>
        </Browse>
        <Stats
          url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
        ></Stats>
      </div>
    </>
  );
}

 const Browse = styled.div`
  margin: 20px;
    h2{
      font-size: 1.2em;
    }

`

      //Object.entries first to be able to run map on a array
      //Arrow function implies a return () instead of {}
      //
