document.addEventListener("DOMContentLoaded", function () {
    let inputField = document.querySelector(".input-inside input");
    let buttons = document.querySelectorAll(".buttons");

    
    function updateInput(value) {
        
        if (value === "=") {
            try {
                
                let expression = inputField.value
                    .replace(/÷/g, "/") 
                    .replace(/×/g, "*"); 

                
                let result = eval(expression);
                inputField.value = result; 
            } catch (e) {
                inputField.value = "Error"; 
            }
        }
        
        else if (value === "C") {
            inputField.value = "";
        }
        
        else {
            inputField.value += value;
        }
    }

    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = button.textContent;

    
            if (value === "×") {
                value = "×"; 
            } else if (value === "÷") {
                value = "÷"; 
            }

            updateInput(value);
        });
    });


    document.addEventListener("keydown", function (event) {
        let key = event.key;

        if (!isNaN(key) || ["+", "-", "*", "/", ".", "%", "Backspace", "Enter", "Escape"].includes(key)) {
            if (key === "Enter") {
                updateInput("=");
            } else if (key === "Backspace") {
                inputField.value = inputField.value.slice(0, -1);
            } else if (key === "Escape") {
                updateInput("C");
            } else if (key === "*") {
                updateInput("×");
            } else if (key === "/") {
                updateInput("÷");
            } else {
                updateInput(key);
            }
        }
    });
});
