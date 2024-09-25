'use strict';

// document.querySelector('.ok').addEventListener('click', () => {
  // console.log('clicked');
  // document.querySelector('p').textContent = 'こんにちは';
  // document.querySelector('p').textContent = document.querySelector('button').textContent
  // document.querySelector('p').classList.add('pink-bg', 'red-border');
  // document.querySelector('p').classList.remove('green-color');

  // console.log(document.querySelector('p').classList.contains('pink-bg'));
  // if (document.querySelector('p').classList.contains('pink-bg') === false) {
  //   document.querySelector('p').classList.add('pink-bg');

  // } else {
  //   document.querySelector('p').classList.remove('pink-bg');
  // }

  // document.querySelector('p').classList.toggle('pink-bg');

  // document.querySelectorAll('li')[0].textContent = 'changed';
  // document.querySelectorAll('li')[1].textContent = 'changed';
  // document.querySelectorAll('li')[2].textContent = 'changed';

  // document.querySelectorAll('li').forEach((li)=>{
  //   li.textContent = 'changed!';
  // })

//   document.querySelectorAll('.target').forEach((li)=>{
//     li.textContent = 'changed!';
//   })

//   document.querySelector('#second').textContent = 'OK!';

//   const liElement = document.createElement('li');
//   liElement.textContent = 'Hanako';
//   // document.querySelector('ul').appendChild(liElement);
//   // document.querySelector('ul').insertBefore(liElement, document.querySelector('#second'));

//   if (confirm('are you sure?') === true){
//     document.querySelector('#second').remove();
//   }

// }

// );


// document.querySelector(".submit").addEventListener('click', ()=>{
// alert(document.querySelector('input').value);
// alert(document.querySelector('textarea').value);
// document.querySelector('textarea').value = '';

// alert(document.querySelector('select').value);

// document.querySelectorAll('input').forEach((radio)=>{
//   if (radio.checked === true) {
//     alert(radio.value);
//   }
// })

// const colors = [];

// document.querySelectorAll('input').forEach((checkbox)=>{

//   if (checkbox.checked === true){
//     colors.push(checkbox.value);
//   }
// });
// alert(colors.join(','));

// });

// document.querySelector('#textchange').addEventListener('input', ()=>{
//   const pElement = document.querySelector('.yomikomi');
//   const inputElement = document.querySelector('#textchange')
//   // pElement.textContent = inputElement.value;
//   pElement.textContent = inputElement.value.length;
// });

// document.querySelector('#textchange').addEventListener('focus', ()=>{
//   document.querySelector('.yomikomi').textContent = 'English only'
// })

// document.querySelector('#textchange').addEventListener('blur', ()=>{
//   document.querySelector('.yomikomi').textContent = ''
// })

// document.querySelector('#textchange').focus();

// document.addEventListener('keydown', (e)=>{
//   document.querySelector('.hyoji').textContent = e.key;
// })

// document.addEventListener('mousemove', (e)=>{
//   document.querySelector('.hyoji').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
// })

// document.querySelector('form').addEventListener('submit', (e)=>{
//   e.preventDefault();
//   document.querySelector('.result').textContent = document.querySelector('.nyuryoku').value;
// })

//背景変更スイッチ
// document.querySelector('#light').addEventListener('change', ()=>{
//  document.querySelector('body').style = 'background: yellow';
// })

// document.querySelector('#dark').addEventListener('change', ()=>{
//   document.querySelector('body').style = 'background: darkblue';
//  })

//時間操作
// const n = Number(prompt('Number?'));
// console.log(n + 5);

//映画のトータル時間表示
// const n = Number(prompt('total duration?'));
// console.log(`Hours: ${Math.floor(n / 60)}`);
// console.log(`Minutes: ${n % 60}`);

//通貨変換計算
// const n = Number(prompt('Yen?'));
// const amount = (n/144).toFixed(2);
// console.log(`USD: ${Number(amount).toLocaleString()}`);
// toFixedは小数点指定だが四捨五入される
// toLocaleStringはカンマをつける

// 繰り返し処理
// const n = Number(prompt('Count?'));
// for (let i = 0; i < n; i++ ) {
//   if ( i % 3 ===0){
//     console.log(`---item: ${i}---`);
//   }else {
//     console.log(`===item: ${i}===`);
//   }
// }

//乱数生成
// function getRandomInteger(max){
//   return Math.floor(Math.random() * (max + 1));
// }

// for (let i = 0; i < 10; i++) {
//   const n = getRandomInteger(5)
//   console.log(`${i}: ${n}`);
// }

// const scores = [70, 90, 80, 75];
// let max = 0;

// scores.forEach((score)=>{
//   if (score > max){
//     max = score;
//   }
// })
// console.log(max);
// console.log(Math.max(...scores));
// console.log(Math.min(...scores));

// const string = prompt('Name?');
// if (string.toLowerCase().trim() === 'taro'){
//   console.log('correct');
// } else {
//   console.log('wrong');
// }

// const emails = [
//   'taro@example.com',
//   'jiro@example.com',
//   'saburo@example.com',
//   'kintaro@example.com'
// ];

// emails.forEach((email)=>{
//   if (email.includes('taro') === true) {
//     console.log(email);
//   }
// })

// emails.forEach((email)=>{
//   if (email.indexOf('taro') === 0) {
//     console.log(email);
//   }
// })

// emails.forEach((email)=>{
//   if (email.startsWith('taro') === true) {
//     console.log(email);
//   }
// })

// emails.forEach((email)=>{
  // console.log(email.slice(0, 4));
  // const loc = email.indexOf('@');
  // console.log(email.slice(0,loc));
  // console.log(email.substring(0,loc));
// })

// emails.forEach((email)=>{
  // console.log(email.replace('@example.com', ''));

//   const items = email.split('@')
//   console.log(items[0]);
// })

// const counts = [6, 12, 8, 15];

// counts.forEach((count)=>{
  // let bar = '';
  // for (let i = 0 ; i < count; i++){
  //   bar += '*';
  // }
//   const bar = '*'.repeat(count);
//   const label = String(count).padStart(2, ' ');
//   console.log(`${label}: ${bar}`);

// });

const HOURS = Array.from(Array(12),(_, i)=> (i + 1));
console.log(HOURS);
