import styled from 'styled-components';
import { device } from '../../utils/responsive';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 280px;
   height: 100vh;
   overflow-y: scroll;
   @media ${device.laptop} {
      width: 230px;
   }
   @media ${device.tablet} {
      display: none;
   }
`;
const Wrapper = styled.div`
   border-bottom: 1px solid rgba(255, 255, 255, 0.2);
   margin: 5px 0;
`;

const Flexing = styled.div`
   display: flex;
   align-items: center;
   gap: 24px;
   margin: 10px 0;
   width: 100%;
   height: 40px;
   cursor: pointer;
   &:active {
      transform: scale(0.98);
   }
   &:hover {
      background: rgba(255, 255, 255, 0.2);
   }
`;
Flexing.Icon = styled.img`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   cursor: pointer;
`;
const Title = styled.h4`
   font-style: normal;
   font-size: ${({title}) => title ? "24px" : "16px"};
   font-weight: 400;
   color: ${({title}) => title ? "rgba(255, 255, 255, 0.6)" : "FFFFFF"};
   line-height: 20px;
`

export {Container, Wrapper, Title, Flexing}