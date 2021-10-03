// Ejercicio encriptar

var plainAlphabet1 = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet1 = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var text = "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";
var text2 = "Hola mundo";

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

console.log("Texto introducido: " + text2);
console.log("Texto encriptado: " + transformText(text2, plainAlphabet1, encryptedAlphabet1));
console.log("Texto introducido: " + text);
console.log("Texto desencriptado: " + transformText(text, encryptedAlphabet1, plainAlphabet1));

// Ejecicio generador aleatorio

var randomPick = (n, min, max) => {
    var range = max - min + 1;
    var result = [];
    for (var i = 0; i < n; i++) {
        result[i] = Math.floor(Math.random() * range) + min;
        //No deben repetirse los numeros escogidos aleatoriamente
    }
    return result;
}

console.log(randomPick(10, 1, 100));
// randomPick(6, 1, 49); // Apuesta automática de la primitiva
// randomPick(15, 1, 15); // Escoge combinación de bolas de billar
// randomPick(1, 1, 6); // Tirada aleatoria de un dado