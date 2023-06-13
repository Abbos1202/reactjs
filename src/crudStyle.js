import styled from 'styled-components';


export const Container = styled.div`
    margin: 50px;
`
Container.Create = styled.button`
   width: 50px;
   height: 25px;
   border: none;
   background-color: darkgoldenrod;
   cursor: pointer;
   color: white;

   &:active{
    transform: scale(0.96);
   }
   &:hover {
    background-color: darkorange;
   }
`;

export const Table = styled.table`
   width: 50%;
   height: fit-content;
   border-collapse: collapse;
`;
Table.Tbody = styled.tbody`
   text-align: center;
`;
Table.Edit = styled.button`
   width: 50px;
   height: 25px;
   border: none;
   color: white;
   background-color: coral;
   cursor: pointer;
   margin-right: 10px;

   &:active {
    transform: scale(0.96);
   }
   &:hover{
    background-color: maroon;
   }
`;
Table.Delete = styled.button`
   width: 50px;
   height: 25px;
   border: none;
   color: white;
   background-color: mediumaquamarine;
   cursor: pointer;

   &:active {
    transform: scale(0.96);
   }
   &:hover{
    background-color: saddlebrown;
   }
`;