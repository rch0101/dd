function loguear(){
    let user = document.getElementById("fecha").value;
    let pass = document.getElementById("password").value;
    if(user == "25-01-2025" && pass == "C+R"){
        window.location.href = "historiade.html";
    } else {
        
        alert('Mi amor no te sabes la fecha :( Utiliza DD-MM-AAAA y la contraseña correcta. Una pista: son nombres sumados'); 
    }
}


