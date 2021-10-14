import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import dekuImg from '../../images/deku.png';
import { Quotes } from '../../components';
import { getQuote } from '../../services';
import smashFx from '../../sounds/smashfx.mp3';

const audio = new Audio(smashFx);

export function App() {
  let isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({ quote: 'loading quote...', speaker: 'loading speaker...'});

  /*const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  }

  const getSingleQuote = async () => {
    const quotes = await getQuote();
    //console.log('Quotes: '+ quotes);
    return quotes[getRandom(quotes.length)];
  };

  const onUpdate = async () => {
    const quote = await getSingleQuote();
    //console.log('Quote: '+ quote);
    if (isMounted.current) {
      audio.play();
      setQuoteState(quote);
    }
 };*/

 const onUpdate = async () => {
  const quote = await getQuote();
  console.log('Quote: '+ quote.quote);
  if (isMounted.current) {
    audio.play();
    setQuoteState(quote);
  }
}

  useEffect(() => {
    onUpdate();
    return () => {
      isMounted.current = false;
    };
  }, []);

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