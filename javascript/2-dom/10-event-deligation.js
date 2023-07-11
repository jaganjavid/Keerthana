const delItem = document.querySelector(".delete-item");

document.body.addEventListener("click", deleteItem);


function deleteItem(e){
    // if(e.target.parentElement.className === "delete-item secondary-content"){
    //     console.log(e.target.parentElement.parentElement);
    // }

    if(e.target.parentElement.classList.contains("delete-item")){
        e.target.parentElement.parentElement.remove()
    }
   
}