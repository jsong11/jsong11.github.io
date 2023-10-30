function averageThreeNumbers(a,b,c){
    let sum = a + b + c;
    let leng = 3;
    return sum/leng;

}

function createSentence(num, noun){
    return 'On average, a Berkeley Student has' + ' ' + num + ' ' + noun + 's';
}

function getRandomNum(max){
    min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, 'capybara');

console.log(sentence);