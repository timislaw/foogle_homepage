// const newName = "Timmay";
// console.log(newName);
// console.log(23 + 97);
// console.log(6 + 3 + 6 + 3 + 6 + 3);
// console.log((4 + 6 + 9) / 77);
// function add7(){
//     let oneNumber = prompt("enter number");
//     return parseInt(oneNumber) + 7;
// }

function add7(Number){
    return Number + 7;
}

function multiply(){
    let oneNumber = prompt("enter number");

    let twoNumber = prompt("enter number");

    return parseInt(oneNumber) * parseInt(twoNumber);
}

function capitalize(string){

    return string.charAt(0).toUpperCase() + string.slice(1);

}

function lastLetter(string){
    return string.slice(-1);
}