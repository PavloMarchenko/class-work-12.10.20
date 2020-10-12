// 1.	Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.

// let arr = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];
// console.log(Math.max(...arr));



// 2.	Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. Створити новий масив де будуть тільки Стрінгові значення.

// let arr = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!'];
// const arrStr = [];

// for(let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     arrStr.push(arr[i]);
//   }
// }
// console.log(arrStr);


// 3.	Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. Додати можливість додати нове поле для всіх юзерів – job (true/false);

// let collection = [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"},
//                  {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, 
//                  {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}];

//Вивести всіх юзерів з типом user
// function allUsers(inputArray) {
//   let users = [];
//   inputArray.forEach((user, index) => {
//     if (user.type === 'user') {
//       users.push(user.name);
//     }
//   })
//   console.log(users);
// }
// allUsers(collection);






// 4.	Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.

// let text = document.getElementById("text");



// 5.	https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.
