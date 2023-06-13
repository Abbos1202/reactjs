import styled from 'styled-components';
import { device } from '../../utils/responsive';

const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex: 1;
   height: 100vh;
   margin-top: 13px ;
   overflow-y: scroll;
   @media ${device.tablet} {
      margin-top: 0;
   }
`;
const Wrapper = styled.div`
   margin-bottom: 90px;
`;
export { Container, Wrapper }