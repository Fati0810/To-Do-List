// On recupere les elements avec l'id dans le html
const addButton = document.getElementById("add-button");
const addList = document.getElementById("list-add");

// on cree la fonction pour ajouter une tache au click
function addTask(){
    // le if(si) pour signifier qu'il faut une valeur quand la valeur est strictement null
    if(addButton.value === ''){
        alert("Vous devez ajouter une tâche");
    }
    // le else(sinon) on crée un enfant li equivalent a la valeur de l'input
    else{
        let li = document.createElement("li");
        li.innerHTML = addButton.value;
        addList.appendChild(li);
        // on ajouter une petite croix pour supprimer l'element
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // on remet à zero l'input après avoir ajouter le li à la liste
    addButton.value = "";
    // on appelle la function pour que'elle sauvegarde les nouvelle data a chaque ajout (1)
    saveData();
    
}

addList.addEventListener("click", function(e){
    // le if on veux barrer l'element au click du li
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    // Le else on supprime l'element au click du span
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }   saveData();
}, false);

// lors du rafraichissment de la page on perd les donnée 
// et nous souhaions sauvegarder le contenue de la liste (1)
function saveData(){
    localStorage.setItem("data", addList.innerHTML);

}

// On veut afficher les donnée stocker dans le saveData
function showTask(){
    addList.innerHTML = localStorage.getItem("data");
}
showTask();