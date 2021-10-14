import { useState } from 'react';
import styled from 'styled-components';
import dekuImg from '../../images/deku.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';

export function App() {
  const [quoteState, setQuoteState] = useState({ quote: 'ok', speaker: 'Speaker'});

  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  }

  const getSingleQuote = async () => {
    const quotes = await getQuote();
    console.log('Quotes: '+ quotes);
    return quotes[getRandom(quotes.length)];
  };

  const onUpdate = async () => {
    const quote = await getSingleQuote();
    console.log('Quote: '+ quote);
    setQuoteState(quote);
 };

  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />
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