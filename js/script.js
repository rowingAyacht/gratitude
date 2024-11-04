console.log("here")

function addGratitude(){
    var input = document.getElementById('input').value;

    if (input !== "") {
        var newEl = document.createElement('li');
        var newText = document.createTextNode(input);

        newEl.appendChild(newText);

        //delete button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        newEl.appendChild(deleteButton);
        deleteButton.onclick = function() {
            newEl.remove(); //w3 schools
        };

        var position = document.getElementById('ul');
        position.appendChild(newEl);
        document.getElementById('input').value = ""; //clear the input after use
    }else{        
        alert("Please enter something you're grateful for!"); //if the input is empty when clicked
    }
}