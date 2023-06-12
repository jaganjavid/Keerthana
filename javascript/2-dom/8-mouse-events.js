const clearBtn = document.querySelector(".clear-tasks");

// Mouse Event

clearBtn.addEventListener("click", runEvent);

// clearBtn.addEventListener("dblclick", runEvent);

// clearBtn.addEventListener("mousedown", runEvent);

// clearBtn.addEventListener("mouseup", runEvent);

// clearBtn.addEventListener("mouseenter", runEvent);

// clearBtn.addEventListener("mouseleave", runEvent);



function runEvent(e){
    console.log(`Event type ${e.type}`);
}