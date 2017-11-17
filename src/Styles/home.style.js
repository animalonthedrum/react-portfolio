// import styled from 'styled-components';
import styled, {css} from 'styled-components';
export const Image = styled.img `
width:100%;
`;

export const HomeImage = styled.div`
height:100vh;
background-image:url('${require('../nordwood-themes-166423.jpg')}');
background-repeat: no-repeat;
background-size:cover;
background-position:center;


display:flex;
flex-direction:column;
justify-content:center;
text-align:center;


font-size:2em;
`;


export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 2s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;
