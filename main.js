// const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let newWord = "";
//     while (newWord.length < 4) {
//         newWord += alphabet[Math.floor(Math.random() * alphabet.length)];
//     }
// alert(newWord);

const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
]

const wordOne = Math.floor(Math.random() * alphabet.length);
const wordTwo = Math.floor(Math.random() * alphabet.length);
const wordThree = Math.floor(Math.random() * alphabet.length);
const wordFour = Math.floor(Math.random() * alphabet.length);


const randomWord = `${alphabet[wordOne]}${alphabet[wordTwo]}${alphabet[wordThree]}${alphabet[wordFour]}`;
alert(randomWord);
