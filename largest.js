function compare(num1,num2){
    if (num1>num2){
        document.write(num1 + " is the largest.");
    }
    else if(num2>num1){
        document.write(num2 + " is the largest.");
    }
    else{
        document.write("both are equal.");
    }
}

num1 = prompt("enter a number:");
num2 = prompt("enter a number:");
compare(num1,num2);