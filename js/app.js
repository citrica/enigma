// Ejercicio encriptar

var plainAlphabet1 = "aom";
var encryptedAlphabet1 = "sz*";
var plainAlphabet2 = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet2 = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var text1 = "hola amigo";
var text2 = "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";


var searchIndex = (letter, alphabet) => {
    return alphabet.indexOf(letter);
}

var transformLetter = (letter, origin, destination) => {
    var letterIndex = searchIndex(letter, origin);
    var result = letterIndex === -1 ? letter : destination[letterIndex];
    return result;
}

var transformText = (text, origin, destination) => {
    var textLowerCase = text.toLowerCase();
    var newText = "";
    for (var i = 0; i < textLowerCase.length; i++) {
        newText = newText + transformLetter(textLowerCase[i], origin, destination);
    }
    return newText;
}

// console.log("Texto introducido: " + text1);
// console.log("Texto encriptado: " + transformText(text1, plainAlphabet1, encryptedAlphabet1));
// console.log("Texto introducido: " + text2);
// console.log("Texto desencriptado: " + transformText(text2, encryptedAlphabet2, plainAlphabet2));

// Ejecicio generador aleatorio

var randomNumber = (range, min) => Math.floor(Math.random() * range) + min;

var notRepeatNumber = (index, array, range, min) => {
    var j = index;
    while (0 < j) {
        if (array[index] === array[j - 1]) {
            resultNew = randomNumber(range, min);
            array[index] = resultNew;
            j = index;
        } else {
            j--;
        }
    }
    return array[index];
}

var randomPick = (n, min, max) => {
    var range = max - min + 1;
    var result = new Array(n);

    for (var i = 0; i < n; i++) {
        result[i] = randomNumber(range, min);
        notRepeatNumber(i, result, range, min);
    }
    return result;
}

console.log(randomPick(10, 1, 100));
console.log(randomPick(6, 1, 49)); // Apuesta automática de la primitiva
console.log(randomPick(15, 1, 15)); // Escoge combinación de bolas de billar
console.log(randomPick(1, 1, 6)); // Tirada aleatoria de un dado