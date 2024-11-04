console.log("here")

function addGratitude(){
    var input = document.getElementById('input').value;
    if (input.trim() !== "") {
        var newEl = document.createElement('li');

        var newText = document.createTextNode(input);

        newEl.appendChild(newText);

        var position = document.getElementById('ul');
        position.appendChild(newEl);

        document.getElementById('input').value = ""; //clear the input after use
    }else{        
        alert("Please enter something you're grateful for!");
    }

}