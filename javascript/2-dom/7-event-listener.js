// document.querySelector(".clear-tasks").addEventListener("click", function(){
    // console.log("Hey im clear");
//     console.log(5 + 5);
// })

document.querySelector(".clear-tasks").addEventListener("click", onClick);

let count = 0;

document.querySelector("#task-title").textContent = count;

const cardAction = document.querySelector(".card-action");

function onClick(event){
    // count = count + 1;
    count += 1;

    cardAction.classList.toggle("card-test");

    // if(count === 1){
    //     cardAction.classList.add("card-test");
    // } else {
    //     cardAction.classList.remove("card-test");
    // }
    

    document.querySelector("#task-title").textContent = count;
}