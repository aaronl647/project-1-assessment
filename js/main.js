console.log("YEET")

var positive = document.getElementById('positive').addEventListener("click",posIncrement)
var negative = document.getElementById('negative').addEventListener("click", negIncrement)
var midNum = document.getElementById('number')
var array = [];

function posIncrement() {
    var input = parseInt(document.getElementById('textbox').value)
    console.log(input)
    array.push(input)
    console.log(array)
    var sum = array.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum)
    midNum.innerText = sum;
    if(sum < 0){
        midNum.style.color= 'red';
    }else{
        midNum.style.color= 'black';    
    }
}

function negIncrement() {
    var input = parseInt(document.getElementById('textbox').value)
    array.push(-Math.abs(input))
    console.log(array)
    var sum = array.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum)
        midNum.innerText = sum;
        if(sum < 0){
            midNum.style.color= 'red';
        }else{
            midNum.style.color= 'black';    
        }
}



//number in the center will default at 0
//When a user types in a number
//the number will be saved into an array
//program will take the number in
//according to the button that's pressed +/-
// the program will increment center number up or down the accordingly








