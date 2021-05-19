function convertFahrToCelsius (F) {
    let celsius = (F - 32) * 5/9 ;
    return celsius = celsius.toFixed(4);

}


console.log(convertFahrToCelsius (0));
console.log(convertFahrToCelsius ("0"));
console.log(convertFahrToCelsius ([1,2,3]));
console.log(convertFahrTocelsius ({temp: 0}));


