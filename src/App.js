import Search from "./components/Search";
import styled from "styled-components";
import { WiDayCloudy } from "react-icons/wi";

function App() {
  return (
    <Container>
      <h2>
        Weather Forecast <WiDayCloudy />
      </h2>
      <Search />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  h2 {
    font-size: 2rem;
    color: white;
  }
`;
export default App;
