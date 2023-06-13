import styled from 'styled-components';
import {ReactComponent as home} from '../../../assets/icons/home.svg';
import {ReactComponent as sub} from '../../../assets/icons/subscribers.svg';
import {ReactComponent as library} from '../../../assets/icons/library.svg';
import { device } from './../../../utils/responsive';



const Container = styled.div`
   width: 100%;
   height: 50px;
   background: #121212;
   position: fixed;
   bottom: 0%;
   display: none;
   @media ${device.mobileL} {
      display: block;
   }
`;
const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
   margin-top: 6px;
   @media ${device.mobileL} {
      margin-left: 70px ;
   }
   @media ${device.mobileS} {
      margin-left: 50px;
   }
`;
Wrapper.House = styled(home)`
   width: 20px;
   height: 20px;
   &:active {
    transform: scale(0.95);
   }
`;
Wrapper.Shorts = styled.img`
   width: 30px;
   height: 30px;
   &:active {
    transform: scale(0.95);
   }
`;
Wrapper.Plus = styled.img`
   width: 40px;
   height: 40px;
   &:active {
    transform: scale(0.95);
   }
`;
Wrapper.Subscribers = styled(sub)`
   width: 20px;
   height: 20px;
   &:active {
    transform: scale(0.95);
   }
`;
Wrapper.Library = styled(library)`
   width: 20px;
   height: 18px;
   &:active {
    transform: scale(0.95);
   }
`;

export {Container, Wrapper}
