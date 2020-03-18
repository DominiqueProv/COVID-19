import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import GlobalStyle from '../components/GlobalStyles';
import styled from 'styled-components';


//function index page 

export default function IndexPage() {
  // return Stats, CountrySelector components
  return (
    <>
      <GlobalStyle />
      <div style={{ padding: "20px" , backgroundColor: "red", color: "white"}}>
        <p>SOS Alert</p>
        <h1>Coronavirus disease (COVID-19)</h1>
      </div>
      <h2 style={{ margin: "0", padding: "20px 0 0 20px", fontFamilly: 'Helvetica'}}>World wide Stats</h2>
      <div>
        <Stats url='https://covid19.mathdro.id/api/'></Stats>
        <CountrySelector></CountrySelector>
      </div>
    </>
  )
}

