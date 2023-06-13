import styled from 'styled-components';
import { device } from '../../../utils/responsive';

const Container = styled.div`
  width: 280px;
  height: 200px;
  margin: 18px 0 40px 24px;
  @media ${device.tablet} {
     margin: 10px 20px;
  }
  @media ${device.mobileL} {
    margin: 10px 55px;
  }
  @media ${device.mobileM} {
    margin: 10px 38px;
  }
  @media ${device.mobileS} {
    margin: 10px 35px;
    width: 250px;
    height: 200px;
  }
`;
const Video = styled.img`
   width: 100%;
   height: 190px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  margin: 12px 0;
`;
Wrapper.User = styled.img`
   width: 40px;
   height: 40px; 
   border-radius: 50%;
`;
Wrapper.Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  margin-bottom: ${({desc}) => desc ? '0' : '4px'};
  color: ${({desc}) => desc ? 'rgba(255, 255, 255, 0.6)' : '#FFFFFF'};

  @media ${device.tablet} {
    font-size: 10px;
    line-height: 15px;
  }
`;
const Flexing = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
Flexing.Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.6);
  @media ${device.mobileM} {
    font-size: 10px;
    line-height: 10px;
  }
`

export { Container, Video, Wrapper, Flexing }