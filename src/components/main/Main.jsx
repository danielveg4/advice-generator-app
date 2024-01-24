import { StyledMainContainer, StyledCardContainer, StyledCardInfo, StyledCardTitle, StyledCardNumber, StyledCardDescription, StyledCardButton } from './styles';
import { useEffect, useState } from 'react';

const Main = () => {
    const [frase, setFrase] = useState('');
  
    useEffect(() => {
      fetchFrase(setFrase);
    }, []);
  
    const handleClick = () => {
      fetchFrase(setFrase);
    };
  
    return (
      <StyledMainContainer>
        <StyledCardContainer>
          <StyledCardInfo>
            <StyledCardTitle>Card Title</StyledCardTitle>
            <StyledCardNumber>{frase.id}</StyledCardNumber>
          </StyledCardInfo>
          <StyledCardDescription>{frase}</StyledCardDescription>
          <StyledCardButton onClick={handleClick}>Card Button</StyledCardButton>
        </StyledCardContainer>
      </StyledMainContainer>
    );
  };
  
  const fetchFrase = async (setFrase) => {
      const randomParam = Math.floor(Math.random() * 100);
      const response = await fetch(`https://api.adviceslip.com/advice?random=${randomParam}`);
      const data = await response.json();
      setFrase(data.slip.advice);
  };
  
  export default Main;