let add = document.getElementById("addList").value;
let btnAdd = document.getElementById("btnAdd");
let lista = document.getElementById("Lista");

btnAdd.addEventListener("click", ()=>{
    let add = String(document.getElementById("addList").value);
    console.log(add)

    if(add === ''){
        alert("Preencha o campo de formulario!")
    }
    else{
       let text = document.createElement("li");
       let spanRemove = document.createElement("span");
       let imgRemove = document.createElement("img");
       imgRemove.setAttribute("src", "remove.png");
    
        console.log(imgRemove)
       text.innerText = add;
       text.appendChild(imgRemove);
       console.log(text)

       lista.appendChild(text);
      
    }
})

//let lista = document.getElementById("Lista");