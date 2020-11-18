function validateUsername() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("invalid_username");
    var passwordError = document.getElementById("invalid_password");
    usernameError.innerHTML="";
    passwordError.innerHTML="";
    var expr = /^[a-zA-Z0-9_]{6,20}$/;
    var expr2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if ( !expr.test(username)) {
        usernameError.innerHTML= "Only Alphabets, Numbers and Underscore and between 6 to 20 characters.";
    } else if (!expr2.test(password)) {
        passwordError.innerHTML= "A password must contain Upper Case, Lower Case, Numbers and between 8 to 20 characters.";
    } else {
        window.location.href = "/member.html";
    }
}


function addRow() {
    var username = document.getElementById("usernameID").value;
    var name = document.getElementById("nameID").value;
    var team = document.getElementById("teamID").value;
    var edit = '<button onclick="editRow()"><i class="fas fa-pen"></i></button>';
    var remove = '<button onclick="deleteRow()"><i class="fas fa-trash"></i></button>';

    var valueArray = [username,name,team,edit,remove];

    var tr = document.createElement("tr");

    var index;
    for (index=0; index < valueArray.length; index++) {
        var td = document.createElement("td");
        td.innerHTML=valueArray[index];
        tr.appendChild(td);
    }

    document.querySelector("tbody").appendChild(tr);

    document.getElementById("usernameID").value="";
    document.getElementById("nameID").value="";
    document.getElementById("teamID").value="none";
}

function editRow() {
    
}

function deleteRow() {
    
}