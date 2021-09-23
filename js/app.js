// Ejercicio encriptar

var plainAlphabet1 = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet1 = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";
var text = "b': yqg ,:agr(hue:) shrerg jq,u'qf q !hg ,:psqñrf:g rg,fuwurae: s:f r' ,yq!x mbg:z 'q 'r,yrn !hfua( t'usqfuq ,:apu(:)m z q ,:a!uahq,u:a rajuq ha pragqir ,utfqe:n br' dhr !h dhurfqg)";
var text2 = "Hola mundo";

var searchIndex = (letter, alphabet) => {
    for (var i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) {
            return i;
        }
    }
    return -1;
}

var transformLetter = (letter, origin, destination) => {
    var letterIndex = searchIndex(letter, origin);

    if (letterIndex === -1) {
        return letter;
    } else {
        return destination[letterIndex];
    }
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