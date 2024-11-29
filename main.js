const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let newWord = "";
    while (newWord.length < 4) {
        newWord += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
alert(newWord);
