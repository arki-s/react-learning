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


document.querySelector('#light').addEventListener('change', ()=>{
 document.querySelector('body').style = 'background: yellow';
})

document.querySelector('#dark').addEventListener('change', ()=>{
  document.querySelector('body').style = 'background: darkblue';
 })
