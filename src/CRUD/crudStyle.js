import styled from  'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   padding: 50px;
`
export const Table = styled.table`
   border-collapse: collapse;
   width: 50%;
   height: 250px;
   margin-top: 20px;
`;
export const Tbody = styled.tbody`
   text-align: center;
`;

export const Btn = styled.button`
   width: 80px ;
   height: 20px;
   background-color: coral;
   border: none;
   color: #fff;
   &:active {
    transform: scale(0.96);
   }
   &:hover {
    background-color: crimson;
   }
`;

export const Button1 = styled.button`
   width: 80px ;
   height: 25px;
   margin-right: 10px;
   background-color: maroon;
   border: none;
   color: #fff;
   &:active {
    transform: scale(0.96);
   }
   &:hover {
    background-color: chocolate;
   }
`;
export const Button2 = styled.button`
   width: 80px ;
   height: 25px;
   background-color: cornflowerblue;
   margin-left: 10px;
   border: none;
   color: #fff;
   &:active {
    transform: scale(0.96);
   }
   &:hover {
    background-color: darkorange;
   }
`;