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