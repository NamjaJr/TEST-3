//1 задача

// const regExp = /Регулярные выражения/
//
// const containsOnlyDigits = (str) => {
//     const regExp = /^\d+$/;
//     return regExp.test(str);
// }
//
// console.log(containsOnlyDigits("12345")); // Выведет true
// console.log(containsOnlyDigits("12a45")); // Выведет false


//2 задача

// const printEverySecond = () => {
//     let seconds = 1;
//     const intervalId = setInterval(() => {
//         console.log("Прошла секунда")
//         seconds++;
//     }, 1000)
// }
//
// printEverySecond();

//3 задача

// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i)
//         i++
//         if (i > 10) {
//             clearInterval(interval)
//         }
//     }, 1000);
// }
//
// count();

 //4 задача
// const box = document.getElementById('myBox');
//
// box.addEventListener('click', () => {
//     const hasClass = box.classList.contains('background-active')
//     if (hasClass) {
//         box.classList.remove('background-active')
//         box.style.backgroundColor = '';
//     } else {
//         box.classList.add('background-active')
//         box.style.backgroundColor = 'blue'
//     }
// })

//5 задача
// const request = new XMLHttpRequest();
// request.open('GET', 'test.json');
// request.setRequestHeader('Content-type', 'application/json');
// request.send();
// request.addEventListener('load', () => {
//     if (request.status >= 200 && request.status < 300) {
//         const data = JSON.parse(request.response);
//         console.log('key1:', data.key1)
//         console.log('key2:', data.key2)
//         console.log('key3:', data.key3)
//     } else {
//         console.error('Ошибка при выполнении запроса:', request.statusText);
//     }
// });
