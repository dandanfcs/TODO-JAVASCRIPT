let add = document.getElementById("addList").value;
let btnAdd = document.getElementById("btnAdd");
let lista = document.getElementById("Lista");

//Caso o usuario clique no botão de adicionar
btnAdd.addEventListener("click", addTarefa);
//Caso o usuário pressione a tecla Enter
document.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        addTarefa()
    }
})

//Função para adicionar tarefa
function addTarefa(){
    let add = String(document.getElementById("addList").value);
    if(add === ''){
        //Caso usuário não tenha preenchido o campo
        alert("Preencha o campo de formulario!")
    }
    else{
       //Criando uma TAG <li> 
       let text = document.createElement("li");
       //Criando uma TAG <span> 
       let spanRemove = document.createElement("span");
       //Criando uma TAG <img> 
       let imgRemove = document.createElement("img");
       //Adicionando a imagem na tag <img> e id para deletar
       imgRemove.setAttribute("src", "./src/remove.png");
       imgRemove.setAttribute("id", "delete");
      
       text.innerText = add;
       text.appendChild(imgRemove);
      
       lista.appendChild(text);
       //função para deletar elemento
       //Caso usuário clique no icone (<img>)
       Delete();
    }
}

//Função para remover tarefa
function Delete(){
    let imagesRemove = document.querySelectorAll("#delete");
    //Percorre todas as tags img com id igual delete retornando um array
    imagesRemove.forEach( element => {
        //Pegando a Tag pai da img (<li>)
        let deleteElement = element.parentNode;
        //Caso o usuário clique na tag <img> da tarefa adicionada, ela será removida
        element.addEventListener("click", ()=>{
            deleteElement.remove();
        })
    })
}
