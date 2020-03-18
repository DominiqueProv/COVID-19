import useStats from '../utils/useStats';
import styled from 'styled-components';


export default function Stats({url}) {
  //passing down the full url as a param to 'useInfoAPI'
  const {stats} = useStats(url);
  //if statement for the loader to kick in (!stats) 
  if (!stats) return (
  <Loader>
    <p>Loading ...</p>
  {/* <CircularProgress /> */}
  </Loader>
  );
  //return someting JSX
  return (
    <>
   
    <Wrapper>
      <div className="StatBlock">
        <h3>Confirmed: </h3>
        <span>{stats.confirmed.value}</span>
      </div>
      <div className="StatBlock">
        <h3>Deaths: </h3>
        <span>{stats.deaths.value}</span>
      </div>
      <div className="StatBlock">
        <h3>Recovered: </h3>
        <span>{stats.recovered.value}</span>
      </div>
    </Wrapper>
    </>
  );
}

const Loader = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`
const Wrapper = styled.div`
display: flex;
justify-content: space-around;

  div{
    background-color: #eee;
    margin: 20px;
    padding: 20px;
    border-radius:8px;
    width: 30%;
      h3{
        padding: 0 0 10px 0;
        margin: 0;
      }
  }


`