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
