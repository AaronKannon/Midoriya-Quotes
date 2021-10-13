import styled from 'styled-components';
import dekuImg from '../../images/deku.png';

export function App() {
  return (
    <Content>
      <p>quote xpto - Speaker</p>
      <button>Quote Smash!!</button>
      <DekuImg src={dekuImg} alt="Midoriya Izuku Full Cowling" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DekuImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;