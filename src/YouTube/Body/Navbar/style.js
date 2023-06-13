import styled from 'styled-components';
import { device } from '../../../utils/responsive';

const Container = styled.div`
   width: 100%;
   height: 40px;
   display: flex;
   align-items: center;
   gap: 10px;
   margin-left: 20px;
   @media ${device.tablet} {
      margin-left: 10px;
   }
`;
Container.Icon = styled.img`
   display: none;
   @media ${device.tablet} {
      display: block;
   }
`;
const Wrapper = styled.div``;
Wrapper.Title = styled.p`
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;
   color: #FFFFFF;
   padding: 5px 12px;
   background: rgba(255, 255, 255, 0.2);
   border: 1px solid rgba(255, 255, 255, 0.4);
   border-radius: 30px;
   cursor: pointer;
   &:active {
    transform: scale(0.98);
   }
   &:hover {
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    color: #000000;
   }
   @media ${device.laptopL} {
     font-size: 12px;
     padding: 5px 10px;
   }
  
   @media ${device.laptop} {
      font-size: 6px;
      padding: 0 10px;
   }
   @media ${device.mobileL} {
      font-size: 5px;
   }
`
Container.Img = styled.img`
   width: 20px;
   height: 25px;
   background: #121212;
   display: block;
   position: fixed;
   cursor: pointer;
   left: 93.8%;
   &:active {
      transform: scale(0.95);
   }
   @media ${device.laptopM} {
      display: none;
   }
`;
export { Container, Wrapper}