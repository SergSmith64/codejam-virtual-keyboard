// ___  codejam-virtual-keyboard ___

// const keys = [
//   { 'en': 'q', 'ru': 'й', 'keyCode': 81 },  
//   { 'en': 'w', 'ru': 'ц', 'keyCode': 87 },
//   { 'en': 'e', 'ru': 'у', 'keyCode': 69 },
//   { 'en': 'r', 'ru': 'к', 'keyCode': 82 },
//   { 'en': 't', 'ru': 'е', 'keyCode': 84 },
//   { 'en': 'y', 'ru': 'н', 'keyCode': 89 },
//   { 'en': 'u', 'ru': 'г', 'keyCode': 85 },
//   { 'en': 'i', 'ru': 'ш', 'keyCode': 73 },
//   { 'en': 'o', 'ru': 'щ', 'keyCode': 79 },
//   { 'en': 'p', 'ru': 'з', 'keyCode': 80 },
//   { 'en': '[', 'ru': 'х', 'keyCode': 219 },
//   { 'en': ']', 'ru': 'ъ', 'keyCode': 221 },
//   { 'en': '`\`', 'ru': '`\`', 'keyCode': 220 },
//   { 'en': 'a', 'ru': 'ф', 'keyCode': 65 },
//   { 'en': 's', 'ru': 'ы', 'keyCode': 83 },
//   { 'en': 'd', 'ru': 'в', 'keyCode': 68 },
//   { 'en': 'f', 'ru': 'а', 'keyCode': 70 },
//   { 'en': 'g', 'ru': 'п', 'keyCode': 71 },
//   { 'en': 'h', 'ru': 'р', 'keyCode': 72 },
//   { 'en': 'j', 'ru': 'о', 'keyCode': 74 },
//   { 'en': 'k', 'ru': 'л', 'keyCode': 75 },
//   { 'en': 'l', 'ru': 'д', 'keyCode': 76 },
//   { 'en': ';', 'ru': 'ж', 'keyCode': 186 },
//   { 'en': `'`, 'ru': 'э', 'keyCode': 222 },
//   { 'en': 'enter', 'ru': 'enter', 'keyCode': 13 },
//   { 'en': 'z', 'ru': 'я', 'keyCode': 90 },
//   { 'en': 'x', 'ru': 'ч', 'keyCode': 88 },
//   { 'en': 'c', 'ru': 'с', 'keyCode': 67 },
//   { 'en': 'v', 'ru': 'м', 'keyCode': 86 },
//   { 'en': 'b', 'ru': 'и', 'keyCode': 66 },
//   { 'en': 'n', 'ru': 'т', 'keyCode': 78 },
//   { 'en': 'm', 'ru': 'ь', 'keyCode': 77 },
//   { 'en': ',', 'ru': 'б', 'keyCode': 188 },
//   { 'en': '.', 'ru': 'ю', 'keyCode': 190 },
//   { 'en': '/', 'ru': '.', 'keyCode': 191 },
//   { 'en': 'pause', 'ru': 'pause', 'keyCode': 16 },
// ]

// const container = document.createElement('div');
// document.body.appendChild(container);
// container.className = 'container';

// const textarea = document.createElement('textarea');
// textarea.setAttribute('name', 'message');
// textarea.setAttribute('rows', '20');
// textarea.setAttribute('cols', '100');

// container.appendChild(textarea);


// const keyboard = document.createElement('div');
// container.appendChild(keyboard);
// keyboard.className = 'keyboard';

// window.onload = () => {
//   generateKeyboard();
// }

// function generateKeyboard () {
//   keys.map(key => {
//       let keyBtn = document.createElement('div');
//       keyBtn.classList.add('keyBtn');
//       keyboard.prepend(keyBtn);
//   })
// }


// ___с сайта Ильи Кантора ____
let div = document.createElement('div');
div.className = "wrapper";
div.innerHTML = "<strong>Всем привет!</strong> <br>Вы прочитали важное сообщение.";

// ___выводит сам DIV ___
document.body.append(div);