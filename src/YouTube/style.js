import styled from 'styled-components';
import { ReactComponent as burger} from '../assets/icons/burger.svg';
import { ReactComponent as search} from '../assets/icons/search.svg';
import { ReactComponent as video} from '../assets/icons/video.svg';
import { ReactComponent as menu} from '../assets/icons/menu.svg';
import { ReactComponent as bell} from '../assets/icons/bell.svg';
import { device } from '../utils/responsive';

const Container = styled.div`
   display: flex;
   flex-direction: ${({ flex }) => !flex && 'column'};
   background: #121212;
   color: #FFFFFF;
   height: fit-content;
   padding: ${({ flex }) => !flex && '0 30px'};
   @media ${device.tablet} {
    padding: 0;
   }
`;
const Wrapper = styled.div`
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: sticky;
   top: 0;
   background: #121212;
`;
const Category = styled.div`
   display: flex;
   flex: 1;
   align-items: center;
   justify-content: ${({end}) => end && 'flex-end'};
`;
const Icons = styled.div``;

Icons.Burger = styled(burger)`
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
  &:active {
    transform: scale(0.94);
  }
  @media ${device.tablet} {
    display: none;
  }
`;
Icons.Logo = styled.img`
   @media ${device.tablet} {
    width: 80px;
   }
`
Icons.Search = styled(search)`
  width: ${({none}) => none ? "20px" : "65px"};
  height: ${({none}) => none ? "20px" :  "40px"};
  padding: ${({none}) => none ? "" : "10px 20px"};
  margin-left: ${({none}) => none && "20px"};
  background: ${({none}) => none ? "" : "rgba(255, 255, 255, 0.2)"};
  display: ${({none}) => none ? "none" : "block"};
  border-radius: 0px 2px 2px 0px;
  cursor: pointer;
  &:active {
    transform: scale(0.96);
  }
  @media ${device.tablet} {
    display: ${({none}) => none ? "block" : "none"};
  }
`;
Icons.Video = styled(video)`
   width: 24px;
   height: 24px;
   margin-left: 20px;
   display: block;
   cursor: pointer;
    &:active {
    transform: scale(0.96);
    @media ${device.mobileL} {
      margin-left: 15px;
    }
    @media ${device.mobileS} {
      margin-left: 10px;
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`;
Icons.Menu = styled(menu)`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  display: block;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
  @media ${device.tablet} {
    display: none;
  }
`;
Icons.Connect = styled.img`
  width: 30px;
  height: 26px;
  display: none;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
  @media ${device.tablet} {
    display: block;
  }
`;

Icons.Bell = styled(bell)`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  max-width: 500px;
  font-size: 16px;
  background: #000000;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2px 0px 0px 2px;
  color: rgba(255, 255, 255, 0.6);
  padding-left: 10px;
  :focus {
   outline: none;
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const User = styled.img`
   width: 32px;
   height: 32px;
   border-radius: 50%;
   margin-left: 20px;
   cursor: pointer;
  &:active {
    transform: scale(0.96);
  }
`;

export { Container, Wrapper, Category, Icons, Input, User }