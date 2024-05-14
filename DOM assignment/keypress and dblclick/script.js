let codeInput = document.getElementById('code-input');
let outputDiv = document.getElementById('output');

codeInput.addEventListener('keypress',(event)=> {
    console.log(event);
    console.log("welcome");
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Override default behavior of Enter key
        executeCode();
    }   
});

// Execute code when the user double clicks inside the code input area
codeInput.addEventListener('dblclick',(e)=>{
    alert("doubleClick event is working properly 👍");
    console.log("You double clicked");
});


function executeCode() {
    const code = codeInput.value;
    try {
        // Execute code (e.g., using eval)
        const result = eval(code);
        // Display result in the output area
        outputDiv.innerText = result;
    } catch (error) {
        // Display error message in the output area
        outputDiv.innerText = 'Error: ' + error;
    }
}
