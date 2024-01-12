

function makeDiv(text,color){
    let div=document.createElement("div");
    div.innerHTML=`
    <button class="btn2">x</button>
    <p>${text}</p>
    `;
    div.style.backgroundColor=color;
    div.style.minWidth="200px";
    div.style.minHeight="100px";
    divContent.appendChild(div);
}


function removeNote(){
    let rc=document.querySelector(".rs");
    rc.addEventListener("click",(e)=>{
       if(e.target.innerText=="x"){
        e.target.parentElement.remove();
       }
    })
}


let divContent=document.querySelector(".rsContent");
let btn=document.querySelector(".button");
let deContent=document.querySelector(".de_note");
btn.addEventListener("click",()=>{
    let text=document.querySelector("textarea").value;
    let color=document.querySelector(".textColor").value;
    makeDiv(text,color);
    deContent.style.display="none";
    document.querySelector("textarea").value="";
    removeNote();
});

