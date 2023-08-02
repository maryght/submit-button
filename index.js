
function unclick() {
    let star = "";
    let x = document.getElementById("input").value;

    // if(isNaN(x) || x.trim() == ""){
    //     alert("Please input a number");
    //     return;
    // }
 
    let repeat = x;
    for (let i = 0; i <= repeat; i++) {
        for (let j = 0; j < i; j++) {
            star += "*";
        }
        star += "<br>";
    }

    document.getElementById("b").innerHTML = star

}

document.getElementById("button").addEventListener("click", unclick)
