let submitButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let clearText = document.getElementById('clearText');

 submitButton.addEventListener('click', function(){
    
    var paragraph = document.createElement('p');
    
    toDoContainer.appendChild(paragraph);
    paragraph.innerText = inputField.value;
   
    
    
    clearText.addEventListener('click', function(){
        inputField.value="";
        paragraph.remove();
       
    });

 });

