module.exports = function toReadable(number) {
    let numerals = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred'
    }
    let arrOfNum = [];
    let position = 1;
    let mod;
    if (number < 20) {
        //console.log(numerals[number]);
        return numerals[number];
    }
    if (Math.floor(number / 100) > 0 && (number % 100 > 0) && (number % 100 < 20)) {
        arrOfNum.push(numerals[number % 100]); //when 111-119
        number = Math.floor(number / 100);
        position = 100;
    }
    while (number !== 0) {
        mod = number % 10;
        if (mod != 0) {
            arrOfNum.push(numerals[mod * position]);
        }
        number = Math.floor(number / 10);
        position *= 10;
    }
    //console.log(arrOfNum.reverse().join(' '));
    return arrOfNum.reverse().join(' ');

}
