let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");


btn.addEventListener("click",function(){
    if(input.value === ''){
        alert("write something to add in your Todo List ");
    }
    else{
        let item = document.createElement("li");
        item.innerHTML=input.value;
        ul.appendChild(item);
        let delbtn = document.createElement("button")
        delbtn.innerHTML = "\u00d7";
        delbtn.classList.add("deletebtn");
        item.appendChild(delbtn)
        input.value="";
        saveData();
    }
});
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        saveData();

    }
});

function saveData(){
    localStorage.setItem("data",ul.innerHTML)
}
function show(){
    ul.innerHTML = localStorage.getItem("data");
}
show();
