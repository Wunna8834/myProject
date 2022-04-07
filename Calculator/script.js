function getHistory(){
    document.querySelector(".history-value").innerHTML;
}

function printHistory(num){
    document.querySelector(".history-value").innerHTML = num;
}

function getOutput(){
    document.querySelector(".output-value").innerHTML; //get value for output
}

function printOutput(num){
    if (num==""){
        document.querySelector(".output-value").innerHTML = num;
    }
    else{
        document.querySelector(".output-value").innerHTML = getFromNumber(num); //show value in printscreen
    }
    
}

function getFromNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en"); //what is toLocaleString?
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace( /,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
       
    });
}


var number = document.getElementsByClassName("number");
for(var i = 0; i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output = reverseNumberFormat(getOutput());
        if (output != NaN){
            output = output + this.id;
            printOutput(output);
        }
    })
}




