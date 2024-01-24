import { StyledMainContainer, StyledCardContainer, StyledCardInfo, StyledCardTitle, StyledCardNumber, StyledCardDescription, StyledCardButton } from './styles';
import { useEffect, useState } from 'react';

const Main = () => {
    const [frase, setFrase] = useState('');
    const [randomParam, setRandomParam] = useState('');
  
    useEffect(() => { 
      fetchFrase(setFrase, setRandomParam);
    }, []);
  
    const handleClick = () => {
        console.log('CLICK');
        fetchFrase(setFrase, setRandomParam);
    };
  
    return (
        <StyledMainContainer>
            <StyledCardContainer>
                <StyledCardInfo>
                    <StyledCardTitle>Card Title</StyledCardTitle>
                    <StyledCardNumber>{randomParam}</StyledCardNumber>
                </StyledCardInfo>
                <StyledCardDescription>{frase}</StyledCardDescription>
                <StyledCardButton onClick={handleClick}>Card Button</StyledCardButton>
            </StyledCardContainer>
        </StyledMainContainer>
        );
    };
  
    const fetchFrase = async (setFrase, setRandomParam) => {
        console.log('USE EFFECT');
        const newRandomParam = Math.floor(Math.random() * 100).toString();
        setRandomParam(newRandomParam);
        const response = await fetch(`https://api.adviceslip.com/advice?random=${newRandomParam}`);
        const data = await response.json();
        setFrase(data.slip.advice);
    };

export default Main;