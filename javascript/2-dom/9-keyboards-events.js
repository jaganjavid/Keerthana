const taskInput = document.querySelector("#task");


// Keyboard

taskInput.addEventListener("keydown", runEvent);

// taskInput.addEventListener("keyup", runEvent);

// taskInput.addEventListener("keypress", runEvent);

// taskInput.addEventListener("focus", runEvent);

// taskInput.addEventListener("blur", runEvent);

// taskInput.addEventListener("cut", runEvent);

// taskInput.addEventListener("copy", runEvent);

// taskInput.addEventListener("paste", runEvent);




function runEvent(e){
    console.log(`Event type : ${e.type}`);
    console.log(e.target.value);
}