//Para a validação acontecer é preciso usar como email 'lucasadmin@gmail.com' e senha 'admin444'
function validar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;
    if(email == "lucasadmin@gmail.com" && senha == "admin444"){
        location.href = "home.html";
    }
    else{
        alert('Email ou senha incorretos')
    }
}