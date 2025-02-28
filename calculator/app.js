
let str ="";

let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
           try{
             str = eval(str);
            document.querySelector('input').value = str;
        }catch (e){
            document.querySelector('input').value = "Error:"+e;
        } }else  if(e.target.innerHTML == 'AC'){
            str = " ";
            document.querySelector('input').value = str;
        }else{
            console.log(e.target);
            str=str + e.target.innerHTML;
            document.querySelector('input').value = str;
        }
     })
})







// let btn = document.querySelectorAll("button");
// function changecolor(){
//     this.style.backgroundColor = "yellow";
// }

// btn.addEventListener("click",changecolor);


