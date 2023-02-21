const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let arr2 = [];
    let total = [];
    let dot = ".";
    let dash = "-";

    for (let i = 0; i < expr.length; i += 10) {
        let divide = expr.slice(i, i + 10);
        arr.push(divide);

        for (let j = 0; j < divide.length; j += 2) {
            let divide2 = divide.slice(j, j + 2);

            if (divide2 == "10") {
                divide2 = dot;
                arr2.push(divide2);
            }
            else if (divide2 == "11") {
                divide2 = dash;
                arr2.push(divide2);
            }
            else if (divide2 == "**") {
                divide2 = "_";
                arr2.push(divide2);
            }
            else if (divide2 == "00") {
                divide2 = " ";
                arr2.push(divide2);
            }
        }
    }

    for (let i = 0; i < arr2.length; i += 5) {
        let divide = arr2.slice(i, i + 5);
        let arr = divide.toString().replaceAll(",", " ").replaceAll(" ", "");
        console.log(arr)
        Object.keys(MORSE_TABLE).forEach(element => {
            if (element == arr) {
                if (MORSE_TABLE.hasOwnProperty(element)) {
                    total.push(MORSE_TABLE[element]);
                }
            }
        })

        if (arr == "_____") {
            total.push(arr);
        }
    }
    return total.join().replaceAll(",", "").replaceAll("_____", " ");
}

module.exports = {
    decode
}