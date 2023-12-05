// Animação da pagina de login
const containerLogin = document.getElementById('container-login');
const btnCadastra = document.getElementById('cadastra');
const btnAcessa = document.getElementById('acessa');

btnCadastra.addEventListener('click', () => {
    containerLogin.classList.add("active");
});
btnAcessa.addEventListener('click', () => {
    containerLogin.classList.remove("active");
});

//validação do login

function logar(){
    var inputUser = document.getElementById('user').value;
    var inputSenha = document.getElementById('senha').value;

        if(inputUser == "admin" && inputSenha == "admin"){
             location.href = "menu.html";
        }else{
            alert('Usuário ou senha Incorreta!!')
        }    
}