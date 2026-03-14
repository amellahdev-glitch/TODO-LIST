// body ---------------------------------
document.body.style.backgroundColor = "lightblue";
document.body.style.height = "90vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

// div ---------------------------------
let div = document.createElement("div");
div.style.backgroundColor = "white";
div.style.height = "auto";
div.style.width = "fit-content";
div.style.border = "1px solid black"
div.style.borderRadius = "5px";
div.style.boxShadow = "0 0 5px black";
div.style.padding = "20px"
// title ------------------------------
let h1 = document.createElement("h1");
h1.textContent = "TODO List";
h1.style.fontFamily = "sans-serif"
div.appendChild(h1);
// input--------------------------------




document.body.append(div);
//  input content
let inputDiv = document.createElement("div");
inputDiv.style.display = "flex";
inputDiv.style.justifyContent = "space-between"
div.appendChild(inputDiv)




let input = document.createElement("input");
input.type = "text";
input.style.fontSize = "25px"
input.style.padding = "10px 20px"
input.style.borderRadius = "5px"
input.style.border = "1px solid #00000050"
input.style.fontFamily = "sans-serif"
input.style.display = "inline"
input.placeholder = "Add your new to do"
inputDiv.appendChild(input);



// button ---------------------------------
let btn = document.createElement("button");
btn.type = "button";
btn.textContent = "+";
btn.style.backgroundColor = "#8D47EE";
btn.style.color = "white";
btn.style.fontSize = "25px";
btn.style.borderRadius = "5px";
btn.style.padding = "10px 20px"
btn.style.margin = "0 5px";
btn.style.cursor = "pointer";
inputDiv.appendChild(btn)


let list = document.createElement("ul");
list.style.padding = "0";
list.style.width = "100%";
div.appendChild(list);



btn.onclick = function () {
    let li = document.createElement("li");
    li.style.margin = "5px 0"
    li.style.textDecoration = "none";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.padding = "10px 20px";
    li.style.listStyle = "none";
    li.style.fontSize = "25px";
    li.style.fontWeight = "bold";
    li.style.fontFamily = "sans-serif";
    li.style.background = "#F2F2F2";
    li.style.width = "-webkit-fill-available";



    let leftSide = document.createElement("div");
    leftSide.style.width = "50%";
    leftSide.textContent = input.value;
    li.appendChild(leftSide)


    let buttonDirection = document.createElement("div");
    buttonDirection.style.display = "flex";
    li.appendChild(buttonDirection);


    let deletBtn = document.createElement("div");
    deletBtn.style.width = "50%";
    deletBtn.style.display = "flex";
    deletBtn.style.justifyContent = "right";
    li.appendChild(deletBtn)

    let delet = document.createElement("a");
    delet.textContent = "Delete";
    delet.style.backgroundColor = "red";
    delet.style.color = "white";
    delet.style.borderRadius = "10px";
    delet.style.textAlign = "right";
    delet.style.padding = "0 2px";
    delet.style.width = "fit-content";
    delet.style.cursor = "pointer";
    deletBtn.appendChild(delet);

    li.addEventListener("mouseenter", function () {
        delet.style.display = "block";
    });

    li.addEventListener("mouseleave", function () {
        delet.style.display = "none";
    });

    delet.onclick = function () {
        li.remove();
    };
    list.appendChild(li);

    input.value = "";


}





// --------------------------------------------------


let footerDiv = document.createElement("div");
footerDiv.style.width = "100%";
footerDiv.style.display = "flex";
footerDiv.style.justifyContent = "space-between";
footerDiv.style.alignItems = "center";
div.appendChild(footerDiv)






let h3 = document.createElement("h3");
h3.style.textContent = listCounter();
h3.style.display = "inline";
h3.style.fontFamily = "sans-serif";
footerDiv.appendChild(h3);

function listCounter() {
    let count = list.children.length;

    if (count === 0) {
        h3.textContent = "No pending tasks";
    } else if (count === 1) {
        h3.textContent = "You have 1 pending task";
    } else {
        h3.textContent = "You have " + count + " pending tasks";
    }
}


let clear = document.createElement("button");
clear.textContent = "Clear All";
clear.style.height = "fit-content"
clear.style.padding = "5px 10px"
clear.style.color = "white"
clear.style.fontSize = "16px"
clear.style.borderRadius = "5px"
clear.style.cursor = "pointer"
clear.style.backgroundColor = "#8D47EE"

footerDiv.appendChild(clear)

clear.onclick = function () {
    list.innerHTML = "";
}
