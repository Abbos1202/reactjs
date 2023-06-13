// lesson 1

// npx create-react-app
// npm start
// What is React JS ?
// Why React is so popular ?
// Virtual DOM
// Component based
// Unidirectional data flow
// Bi directional data flow
// Server side rendering
// Whart is Babel ? (Converter)
// package.json
// package-lock.json
// Readme.md
// gitignore
// node_modules
// public
// src
// React StrictMode
// single page application
// What is render method



// What is React JS ?

// React single page UI application larni yaratish uchun ishlatiladigan open source library hisoblanadi. React Facebook tomonidan 2013 yilda yaratilgan. React ni kuchli tarafi developer community si bor ya'ni content lari judayam ko'p.


// Why React is so popular ?

// Birinchi navbatda judayam tez ishlidi va ikkinchisi code sintaksisi judayam sodda


// Virtual DOM => Virtual DOM da diffing degan algoritm bor va Real DOM ning memory sida joylashgan bo'ladi va Real DOM da Virtual DOM Real DOM ni copy sini yasab oladi
// Virtual DOM da project ni biror yerida o'zgarish bo'lsa o'sha yerni o'zini o'zgartiradi
// Real DOM da esa projectni biror yerida ozgarish bo'lsa butun boshli projectni o'zgartiradi

// Component based => Bu qismlarga bo'lib ishlash va clean code qilib beradi. Birinchisi clean code tamoyili bo'lsa, ikkinchisi reusability qilib beradi

// Unidirectional data flow (teskarisi => bi directional data flow) => One way data flow. Ma'lumotlar bir oqim bo'yicha ketadi yani parentdan childga

// Server side rendering (SSR) => Ma'lumotlar UI da yuradi va browserda birin ketin o'qib keyin chiqaradi. Misol uchun 1 - html code va assets ya'ni img, icon larni o'qidi. 2 - CSS code ni o'qidi. 3 - JavaScript va Reactni o'qidi. Chunki JavaScript sekin download bo'ladi


// What is Babel ? (converter)
// React da yozilgan code larni browser suppport qilmaydi, Babel React da yozilgan codelarni JavaScriptga o'giradi va browser o'qidigan ko'rinishga keltirib beradi

// npx create-react-app => Reactni boshlangich configurationlarni yaratib beradi va bunga react, React yoki katta harfda nom berib bo'lmaydi

// code . => fayl ni VS CODE da ochib beradi

// pwd => qaysi papkada turganimizni aytadi

// npm start => browserni ochib beradi

// package.json => React ni nastroykalarini o'z ichiga oladi

// dependencies => Reactda qanaqa kutubxonalar borligi

// scripts => browserni ochish uchun commanda

// single page application => React single page application deyilishiga sabab bitta html fayl bor va root id li bitta div bor, Reactda yozilgan barcha code lar shu root id li divga kelib tushadi

// gitignore => git hub ga yuborilishi mumkin bo'lmagan code lar va nastroykalar git ignore da bo'ladi. Misol uchun node modules

// package-lock.json => package.json dagi o'rnatilgan dependencies larni manzilini o'ziga save qiladi 

// Readme.md => project haqida umumiy ma'lumot beradi

// src => asosiy code lar shuni ichida yoziladi va qolganlari nastroykalar

// React StrictMode => depricated bo'lgan code lar da warning berib turadi

// What is render method ? 
// Render browserda code larni ko'rsatib berish uchun ishlatilinadi va 1 - si ma'lumot, 2 - si manzil yani document.getElementById('root')

// ========================================================================
// ========================================================================

// lesson 2

// component
// jsx
// props
// children props


// export => 2 xil usuli bor --> 1-si export default App ; 2-si export { App }

// export default App => Bunda faqat bitta function bo'lishi kerak, xohlagan nom bilan import olsa bo'ladi
// export { App, App2 } => Bunda bir nechta function bo'lsa, gulli qavs ichida export qilinadi va o'sha export qilingan nom bilan import qilib olish kerak

// jsx (JavaScript XML) => JavaScript syntax extension JavaScript ichida html code yoki html ichida JavaScript code ni ishlatishimiz

// component => independent, reusable code lar jamlanmasi va har bir component html code qayrardi
// component based => xohlagan joyda xohlagancha chaqirib ishlatishimiz mumkin. Shuning uchun component based deyiladi

// import React from './react' => Bu package.json dagi React ni barcha qismlarini o'z ichiga oladi

// React.Component => package.json dagi React da component degan xususiyati bor va bu xususiyatlarini o'zlashtirib oladi

// props => properties, component lar orasida communication hisoblanadi. Component da bir-biriga data jo'natish va parent dan child ga ma'lumot jo'natadi
// props => ma'lumotlarni dynamic qilib beradi va object ga teng

// children props => parent da <Child /> qilib emas <Child></Child> yani ochiluvchi yopiluvchi qilib ichiga ma'lumot yozib, Child da {props.children} deb chaqirish kerak


// Component => functonal va class componentlar bor va har bir component html code qaytaradi

// ========================================================================
// ========================================================================


// lesson 3

// state 
// setState()

// state => Built in Object hisoblanadi va component haqida ma'lumot (data) saqlaydi ya'ni Navbar.jsx ni datalarini saqlaydi 
// State o'zgarganda ya'ni component dagi ma'lumot o'zgarganda component ni re-render qiib beradi, ya'ni qaytadan yurgazib beradi va o'zgargan joyni o'zini ko'rsatadi
// State qachon o'zgaradi ? => qachonki user action lar bo'lsa ya'ni button input lar

// setState() => o'zgarishlarni control qiladi, har safar o'zgarganda browser ni re-render qilib beradi  va componentni re-render qilib beradi, function ga teng


// class component => state ga ega component hisoblanadi va Reactni yaralishi class componentda
// functional component => stateless, state ga ega bo'lmagan component hisoblanadi

// onChange => input lar bilan ishlaganda va bunda e.target.value keladi.
// e (event) => default parametr


// Misol uchun =>
// const getValue = (e)=> {
//     // console.log(event.target.value);
//     this.setState({title: e.target.value})
//   }

// onClick => button lar bilan ishlaganda ishlaydi bunda misol uchun va user action bajarish uchun function nomi kiritiladi va render() pastida biz o'sha function ni yozishimiz mumkin => count: this.state.count + 1 keladi

// Misol uchun =>
// const oshirish = () => {
//     this.setState({count: this.state.count + 1})
//   }


// select => bunda ham e.target.value keladi

// input type="checkbox" va "radio" => bunda e.target.checked keladi va true, false chiqadi


// input yoki button da  ham callback function orqali setState qilsa bo'ladi


// Misol uchun =>

//  <button onClick={()=> this.setState({count: this.state.count + 1})}>+</button>
//  <h1>{this.state.count}</h1> 
//  <button onClick={()=> this.setState({count: this.state.count - 1})}>-</button>

//  <h2>{this.state.title}</h2> 
//  <input onChange={(e)=> this.setState({ title: e.target.value })} type="text" placeholder="title" />  


// ========================================================================
// ========================================================================

// lesson 4

// function call
// multi state change
// student list => filter

// ()=>  => calback function yurib ketishini oldini oladi


// Misol uchun =>

// <input onChange={()=> nameChange ('test')} type="text" placeholder="name" />
// Bunda ()=> nameChange ('test') ni yurishdan to'xtatib turibdi va onChange yursa keyin nameChange function yuradi qachonki inputga ma'lumot yozilsa


// Bir xil function name bilan dynamic access qilib ikkalasiga alohida ma'lumot kiritish  =>

// render()

// const multiFunction = (e) => {
//     this.setState({ [e.target.name]: e.target.value })
// };

// return (
//     <div>
//         <input name="name" onChange={multiFunction} type="text" placeholder="name" />
//         <input name="status" onChange={multiFunction} type="text" placeholder="status" />

//     </div>
// )

// ========================================================================
// ========================================================================


// lesson 5

// CRUD OPERATION => CREATE READ UPDATE DELETE


// ========================================================================
// ========================================================================

// lesson 6

// styled components

// ---npm install styled-components@latest
// ---Extensions => vscode-styled-components
// ---import styled from 'styled-components';
// ---export
// ---ThemeProvider
// ---lightMode
// ---darkMode

// npm install styled-components@latest => Bu papkaga styled components o'rnatib beradi
// Extensions => vscode-styled-components => Bu styled components da css code yozsak suggest qilib beradi


// import styled from 'styled-components'; => Bu JavaScript faylda css code yozish uchun


// export => styled components da 3 ta turi mavjud -->
// 1 - si => export const Button = styled.button`` va import qilishda ===> import {Button} from './style.js' bo'ladi
// 2 - si => const Container = styled.div``... --> pastidan hamma funksiya export qilinadi ===> export {Container, H1, Paragraph, Button} va import qilishda ===> import {Container, H1, Paragraph, Button} from './style.js' bo'ladi
// 3 - si => const Container = styled.div``...Container.Paragraph = styled.p``.....--> pastdan ===> export {Container} va import qilishda ==> import {Container} from './style.js' va child larini oldiga --> Container.H1 bo'ladi

// ThemeProvider => -lightMode va darkMode yaratib beradi bu asosan index.js ga beriladi va App ni o'rab qoyish kerak
// Mana bu ko'rinishda

//  <ThemeProvider theme={darkMode}>
//  <App/>
// </ThemeProvider> 

// ========================================================================
// ========================================================================

// lesson 7

// ---React LIFECYCLE Methods
// ---React key(map)
// ---React useState(hook)
// ---key(index)

// key(index) =>
// 1-si ==> data ni id si yo'q bo'lsa, ya'ni unique keyi yo'q bo'lsa beriladi
// 2-si ==> data da id bo'lsa va bitta ma'lumotni o'chirib tashlasak, browserni re-render ya'ni re-create qiladi va indexi o'zgarib ketadi. Agar id bersak ma'lumotni o'chirsak ham re-create bo'lmaydi
// 3-si ==> Agar ma'lumot static bo'lsa yani read only bo'lsa, faqat browserga ma'lumot chiqsa va create, update, delete bo'lmasa index beriladi. Agar CRUD bo'lsa id beriladi

// React useState(hook) => React dan keladi va function ni statefull qilib beradi React ni 16-verasiyasida qo'shilgan
// useState() => usestate({}) object va useState([]) array dan foydalanishimiz mumkin


// ========================================================================
// ========================================================================

// lesson 8

// lifting state up
// useEffect hook 

// lifting state up => stateni yuqoriga ko'tarish ma'nosida keladi, 2 yoki 3 childni bitta parentda ularga prop jonatish orqali child dagi codelarni ishlatishimiz mumkin
// useEffect hook  => componentDidMount(), componentDidUpdate(), componentWillUnmount() larni o'z ichiga oladi
// componentDidMount() => render birinchi yurganidan keyin yuradi, render yurgandan keyin qanaqadir holat o'zgarishini xohlasak ishlatamiz
// componentDidUpdate() => component update bo'lgandan keyin yuradi
// componentWillUnmount() => componentni tugashi, ya'ni clean up bo'lishi
// useEffect( () => ) => renderdan keyin yuradi, render qachon bo'ladi qachonki state o'zgarsa

// ========================================================================
// ========================================================================

// lesson 9

// conditional rendering

// conditional rendering => shart asosida browserda o'zgarishlarni contrl qilish

// =========================================================================
// =========================================================================

// lesson 10

// ---useEffect => beckenddan ma'lumot olib kelganda ishlatamiz va fetch then orqali malumotrlarni olib kelamiz
// Misol uchun => 

// import React, {useState, useEffect} from 'react';

// const FetchingData = () => {

//     const [data, setData] = useState([]);
//     const [id, setId] = useState(1)

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then((res) => res.json())
//         .then((response) => {
//             // console.log(response);
//             setData(response);
//         });
//     }, [id])

//   return (
//     <div>
//         <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//         <h5>{data.title}</h5>
//         {/* {
//             data.map((post) => {
//                 return(
//                     <h4 key={post.id}>{post.id}</h4>
//                 )
//             })
//         } */}
//     </div>
//   )
// }

// export default FetchingData;

// -------------------->

// Conditional rendering => shart asosida ekrandagi malumotni o'zgartirish

// Misol uchun => 

// const LoginControl = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(true);
  
//     const handleSignIn = () => {
//       setIsLoggedIn(false);
//     };
  
//     const handleSignUp = () => {
//       setIsLoggedIn(true);
//     };
  
//     return (
//       <div>
//         <h1>LoggedForm Component</h1>
//         {isLoggedIn ? (
//           <SignIn click={handleSignIn} />
//         ) : (
//           <SignUp click={handleSignUp} />
//         )}
//       </div>
//     );
//   };

// --------------------------------->

// ---Context API => Birinchi navbatda bitta js fayl yasab olishimiz kerak va unda React dan useState, createContext keladi 
// Misol uchun =>
// import React, {createContext, useState} from "react";

// export const UserContext = createContext();

// export const Context = ({children}) => {
//     const [name, setName] = useState('Abbosbek');

//     return (
//         <UserContext.Provider value={[name]}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// UserContext => bunda value jo'natib xohlagan child da tutib olishimiz mumkin

// ---------------------------->

// Provider => taminlovchi degani

// ----------------------------------->

// children => eng katta orab turuvchi faylni ya'ni index.js dagi App ni o'rab qo'yishimiz kerak Context bilan ya'ni o'sha Context API yasagan faylimiz bilan

// Misol uchun => 

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import "./index.css";
// import { Context } from './components/ContextAPI/context';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Context>
//       <App />
//     </Context>
//   </React.StrictMode>
// );


// lifting state up => bir nechta sibling childlarga har biriga alohida state yozmasdan parentdan turib props orqali ularga tasir qilish

// state => object hisoblanadi, componentni datasini saqlaydi va browserni re-render qilib beradi. Agar bir oddiy o'zgaruvchi bilan qiymat bersak re-render qilib bermaydi
// setState() => function state ni boshqattan yurgazib beradi va o'zgargan joyni o'zini ko'rsatadi

// prop =>  properties, component lar orasida communication hisoblanadi. Component da bir-biriga data jo'natish va parent dan child ga ma'lumot jo'natadi
// children prop => component ni ichiga ma'lumot yozishga imkoniyat beradi, juft tag. React dan keladi

// state vs prop => 
// props =>  faqat read only, o'zgarmas,ma'lumotlarni bir componentdan boshqa componentlarga argument sifatida o'tkazish imkonini beradi. Props ga child component orqali kirish mumkin, Props componentlar orasidagi communication uchun ishlatiladi,  Stateless componentda props bolishi mumkin props componentlarni reusable qilib beradi
// state => bunda asynchronous xususiyati bor, o'zgaruvchan, state componentlar haqida malumotga ega state ga child component orqali kirish mumkin emas, State component bilan dinamik o'zgarishlarni ko'rsatish uchun ishlatilishi mumkin.
// prop drilling => optimization ga ta'sir qiladi va react oddiy javascript browseriga oxshab qoladi bir parentda misol uchun 3 ta sibling child bo'lsa va ularni ham child lari bo'lsa ularga birin ketin prop yuborish parentdan sibling child ga undan child ga,

// context API (Global data) => state menegement hisoblanadi. Prop drilling ni oldini olib beradi, Context fayl yaratib olib uni eng katta orab turuvchi index.js dagi App componentni orab qoyib xohlagan childda ishlatishimiz mumkin, buning uchun reactdan useContext keladi va context fayldagi createContext qilgan function nomini import qilib olishimiz kerak, 

// ======================================================
// ======================================================

// lesson 11

// You tube clone
// lifting state up => parentdan childga prop orqali data ni jonatish 
// search movies
// delete movies

// 12 - dars

// ---useReducer(hook)
// ---CRUD

// useReducer() => murakkab logiklarni state managmentda useState o'rniga ishlatishimiz mumkin yani useState ni mukammalroq varianti
// useReducer => logiklarini componentdan tashqarida olib chiqib ketish xususiyati bor
// useReducer => complex state management uchun useState o'rniga useReducer ishlatish good practice hisoblanadi
// useReducer() => reducer function va  stateni qabul qiladi
// Contex API bilan useReducer qo'shilsa redux ni ornini bosadi
// dispatch => setStatega o'xshaydi, hamda functionni typeni saqlaydi
// reducer function => 2 ta qiymat oladi , birinchisi state, ikkinchisi action
// state => initial qiymat
// action => dispatchdan kelgan malumotni tutib olamiz
