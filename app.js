var increase = document.querySelector("#increase");
var reset = document.querySelector("#reset");
var decrease = document.querySelector("#decrease");

increase.addEventListener("click", letIncrease);
reset.addEventListener("click", letReset);
decrease.addEventListener("click", letDecrease);




function letIncrease(){
    let number = document.getElementById("count").innerText;
    // console.log(number);
    document.getElementById("count").innerHTML = `
    <div id = "number">
    <p id = "count"> ${(number*1) + 1} </p>
    </div>
    `
}


function letDecrease(){
    let number = document.getElementById("count").innerText;
    // console.log(number);
    document.getElementById("count").innerHTML = `
    <div id = "number">
    <p id = "count"> ${(number*1) - 1} </p>
    </div>
    `
}


function letReset(){
    let number = document.getElementById("count").innerText;
    // console.log(number);
    document.getElementById("count").innerHTML = `
    <div id = "number">
    <p id = "count"> ${number*0} </p>
    </div>
    `
}

