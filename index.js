// Code your solutions in this file
//const names = [];

function writeCards(names, event) {
    let newArr = []
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }

    return newArr;
}   

function countDown(int) {
    let i = 11;
    for (let countDown = 0; countDown < 11; countDown++) {
        console.log(countDown);
    }
    return int;
}