import styled from 'styled-components';


export const Container = styled.div`
   width: 350px;
   height: 520px;
   border-radius: 20px;
   margin: 30px auto;
   background-color: white;
   padding: 30px;
`;
export const Title = styled.h1`
   padding: 0 0 20px 0;
`;

export const Flexing = styled.div`
   display: flex;
   width: 70%;
`;
Flexing.Anchor = styled.a`
   text-decoration: none;
   border: none;
   font-weight: 600;
   color: aqua;
`
Flexing.Paragraph = styled.p`
   padding: 10px 0 10px 10px;
   width: 100%;
   font-size: 11px;
   font-weight: 500;
`;
export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   padding: 10px 0 30px 0;
`;
Wrapper.Paragraph = styled.p`
   font-weight: 600;
   font-size: 12px;
   padding: 0 65px 0 10px;
`
Wrapper.Anchor = styled.a`
   text-decoration: none;
   border: none;
   font-size: 12px;
   color: grey;
`;
export const Paragraph = styled.p`
   text-align: center;
   padding: 20px 0 20px 0;
`;
export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 20px;
  padding-bottom: 40px;
`
export const Icon = styled.i`
   font-size: 36px;
   width: 60px;
   height: 60px;
   color: blue;
   background-color: black;
`;

export const Txt = styled.p`
  font-size: 14px;
`;
export const Btn = styled.button`
   width: 250px;
   height: 45px;
   border: none;
   background-color: blue;
   color: white;
   font-size: 20px;
   font-weight: 600;
   border-radius: 30px;
   margin: 10px 20px;

   &:active{
    transform: scale(0.98);
   }
   &:hover {
    background-color: chocolate;
   }
`;
export const Input = styled.input`
   width: 300px;
   height: 40px;
   padding:0 0 0 20px;
   border-radius: 30px;
   border: 1px solid grey;
   margin: 10px 0;
`;
export const Button = styled.a`
   border: none;
   color: aqua;
   font-weight: 600;
   cursor: pointer;

   &:active{
    transform: scale(0.98);
   }
   &:hover{
    color: coral;
   }
`;

export const Text = styled.p`
    text-align: center;
    font-size: 14px;
    padding-top: 20px;
`;