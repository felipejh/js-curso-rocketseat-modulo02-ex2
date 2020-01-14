function adicionarDiv(){
    var divElement = document.createElement("div");
    var body = document.body;

    divElement.style.width = 100;
    divElement.style.height = 100;
    divElement.style.backgroundColor = "red";
    divElement.onmouseover = function(){
        divElement.style.backgroundColor = getRandomColor();
    };

    body.appendChild(divElement);
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }

var btnAdicionarDiv = document.getElementById("btnAdicionarDiv");
btnAdicionarDiv.onclick = adicionarDiv;