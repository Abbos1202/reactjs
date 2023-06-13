import { styled } from "styled-components";


const Container = styled.div`
background: ${({theme}) => theme.background};
color: ${({theme}) => theme.color};
`
Container.H1 = styled.h1`
font-size: ${({hey}) => hey ? '3rem' : '4rem'};
text-align: center;
`;
Container.Paragraph = styled.p`
background: var(--primary-color);
text-align: center;
`;
Container.Button = styled.button`
background: ${({qizil}) => qizil ? 'var(--secondary-color)' : 'var(--primary-color)'};
border: none;
padding: 10px;
margin: 10px;
`;

export {Container}


// const Container = styled.div`
// background: yellow;
// `;

// const H1 = styled.h1`
// color: ${({hey}) => hey ? 'green' : 'red'};
// font-size: ${({hey}) => hey ? '3rem' : '4rem'};
// text-align: center;
// `;
// const Paragraph = styled.p`
// color: yellow;
// background: red;
// text-align: center;
// `;
// const Button = styled.button`
// background: ${(props) => props.qizil ? 'red' : 'green'};
// color: ${({qizil}) => qizil ? 'white' : 'yellow'};
// border: none;
// padding: 10px;
// margin: 10px;
// display: inline;
// width: ${({qizil}) => qizil ? '100px' : '100vw'};
// `;

// export { Container, H1, Paragraph, Button};




// export const H1 = styled.h1`
// color: ${({hey}) => hey ? 'green' : 'red'};
// font-size: ${({hey}) => hey ? '3rem' : '4rem'};
// text-align: center;
// `;
// export const Paragraph = styled.p`
// color: yellow;
// background: red;
// text-align: center;
// `;
// export const Button = styled.button`
// background: ${(props) => props.qizil ? 'red' : 'green'};
// color: ${({qizil}) => qizil ? 'white' : 'yellow'};
// border: none;
// padding: 10px;
// margin: 10px;
// display: inline;
// width: ${({qizil}) => qizil ? '100px' : '100vw'};
// `;
