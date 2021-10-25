function initNames () {
    numberNames = []
    numberNames[0] = 'zero'
    numberNames[1] = 'one'
    numberNames[2] = 'two'
    numberNames[3] = 'three'
    numberNames[4] = 'four'
    numberNames[5] = 'five'
    numberNames[6] = 'six'
    numberNames[7] = 'seven'
    numberNames[8] = 'eight'
    numberNames[9] = 'nine'
    numberNames[10] = 'ten'
    numberNames[11] = 'eleven'
    numberNames[12] = 'twelve'
    numberNames[13] = 'thirteen'
    numberNames[14] = 'forrteen'
    numberNames[15] = 'fifteen'
    numberNames[16] = 'sixteen'
    numberNames[17] = 'seventeen'
    numberNames[18] = 'eighteen'
    numberNames[19] = 'nineteen'
    numberNames[20] = 'twenty'
    numberNames[30] = 'thirty'
    numberNames[40] = 'forty'
    numberNames[50] = 'fifty'
    numberNames[60] = 'sixty'
    numberNames[70] = 'seventy'
    numberNames[80] = 'eighty'
    numberNames[90] = 'ninety'

    return numberNames
}

numberNames = initNames()

function numberInFull (number) {
    txt = ''

    txt += printMillion(number)
    txt += printThousand(number)
    txt += printHundred(number)
    txt += printTen(number)
    txt += printUnity(number)

    return txt.trim()
}

function printMillion(number) {
    if(number < 1000000) {
        return ''
    }
    million = number.toString()

    let txt = ''
    
    if (number > 99999999 && number <= 999999999) {
        txt += printHundred(parseInt(million.substring(million.length - 9, million.length - 6)))
        txt += printTen(parseInt(million.substring(million.length - 9, million.length - 6)))
        txt += printUnity(parseInt(million.substring(million.length - 9, million.length - 6)))
    }

    if ( number > 9999999 && number <= 99999999) {
        txt += printTen(parseInt(million.substring(million.length - 8, million.length - 6)))
        txt += printUnity(parseInt(million.substring(million.length - 8, million.length - 6)))
    }

    if ( number <= 9999999) {
        txt += printTen(parseInt(million.substring(million.length - 7, million.length - 6)))
    }
    

    return ' ' + txt + ' million'
}

function printThousand(number) {
    if(number < 1000) {
        return ''
    }
    thousand = number.toString()

    let txt = ''
    if (thousand.length >= 6) {
        txt += printHundred(parseInt(thousand.substring(thousand.length - 6, thousand.length - 3)))
        txt += printTen(parseInt(thousand.substring(thousand.length - 6, thousand.length - 3)))
        txt += printUnity(parseInt(thousand.substring(thousand.length - 6, thousand.length - 3)))
    } else if ( thousand.length = 5) {
        txt += printTen(parseInt(thousand.substring(thousand.length - 5, thousand.length - 3)))
        txt += printUnity(parseInt(thousand.substring(thousand.length - 5, thousand.length - 3)))
    } else if ( thousand.length = 4) {
        txt += printTen(parseInt(thousand.substring(thousand.length - 4, thousand.length - 3)))
    }
    

    return txt + ' thousand'
}

function printHundred(number) {
    if(number < 100) {
        return ''
    }
    hundred = number.toString()
    hundred = hundred.substring(hundred.length - 3, hundred.length - 2)
    return ' ' + numberNames[hundred] + ' hundred'
}

function printTen(number) {
    if (number < 21) {
        return ' ' + numberNames[number] 
    }
    tenFull = number.toString()
    ten = tenFull.substring(tenFull.length - 2, tenFull.length - 1)
    
    if (parseInt(ten) < 2){
        ten = tenFull.substring(tenFull.length - 2, tenFull.length)
        return ' ' + numberNames[parseInt(ten)] 
    }
    
    return ' ' + numberNames[parseInt(ten+'0')] 
}

function printUnity (number) {
    strNum = number.toString()
    if(parseInt(strNum.substring(strNum.length-2, strNum.length)) < 21) {
        return ''
    }

    unity = strNum.substring(strNum.length - 1, strNum.length)
    if (unity == '0') {
        return ''
    }
    return ' ' + numberNames[parseInt(unity)] 
}

module.exports = {numberInFull}