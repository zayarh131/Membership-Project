function validateUsername() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("invalid_username");
    var passwordError = document.getElementById("invalid_password");
    username.trim();
    password.trim();
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
    document.getElementById('addbutton').innerHTML= '+ Add';
    var username = document.getElementById("usernameID").value;
    var name = document.getElementById("nameID").value;
    var team = document.getElementById("teamID").value;
    var edit = '<button onclick="editRow(this)"><i class="fas fa-pen"></i></button> <button onclick="deleteRow(this)"><i class="fas fa-trash"></i></button>';

    username.trim();
    name.trim();

    var invalid = document.getElementById("invalid");
    
    if(username == "" || name== "" || (username == "" && name == "")) {
        invalid.style.display="block";
        invalid.innerHTML="Please Enter Username and Name";
    } else {
        invalid.style.display="none";
        var valueArray = [username,name,team,edit];

        var tr = document.createElement("tr");
    
        var index;
        for (index=0; index < valueArray.length; index++) {
            var td = document.createElement("td");
            td.innerHTML=valueArray[index];
            tr.appendChild(td);
        }
    
        document.querySelector("tbody").appendChild(tr);
    }

    document.getElementById("usernameID").value="";
    document.getElementById("nameID").value="";
    document.getElementById("teamID").value="none";
}

function editRow(e) {

    var username = e.parentNode.parentNode.children[0].innerHTML;
    var name = e.parentNode.parentNode.children[1].innerHTML;
    var team = e.parentNode.parentNode.children[2].innerHTML;

    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);

    document.getElementById("usernameID").value=username;
    document.getElementById("nameID").value=name;
    document.getElementById("teamID").value=team;

    document.getElementById('addbutton').innerHTML = 'DONE';
}

function deleteRow(e) {
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}