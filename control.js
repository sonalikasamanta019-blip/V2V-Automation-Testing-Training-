// var game = "cricket";
// let captain = "Dhoni";
// const tennis = "Sania";

// if(game == "something"){
//     console.log("match captain is",captain)
// }
// else if(tennis == "Sania"){
//     console.log("it's correct!")
// }
// else{
//     console.log("nothing is matching!")
// }


switch(true){
    case 10>20:
        answer = "red color";
        break;

    case 20<30:
        answer = "green color";
        break;

    case 50<20:
        answer = "blue color";
        break;

    case 100==200:
        answer = "black color";
        break;

    default:
        answer="nothing above";
        break;
}

console.log(answer);
