import styled from 'styled-components';
import useStats from '../utils/useStats';



export default function ({url}) {
  
  const {stats} = useStats(url);
  if (!stats) return (
    <div>
      <p>Loading ...</p>
    {/* <CircularProgress /> */}
    </div>
    );
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


const Wrapper = styled.div`
display: flex;
justify-content: space-around;
font-family: 'Helvetica';

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