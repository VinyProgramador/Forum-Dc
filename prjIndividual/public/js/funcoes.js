function ColocarImgNoPerfil() {
    var heroiImg = sessionStorage.HEROI_USUARIO;
    var imgSuper = `https://media.gettyimages.com/photos/very-definition-of-a-hero-picture-id501973090?s=612x612`;
    if (heroiImg == 'SuperMan') {
        fotoPerfilId.innertHTML = `
                    <div id="fotoPerfilId" >
            <img src="${imgSuper}" class="perfilUserImg" alt="Deu certo!!!!">
            <h2>Biografia</h2>
            <p><img src="../img/svg/user.svg" alt=""> <span id="b_usuario">usuário</span></p>
            <p><img src="../img/svg/mail.svg" alt=""> <span id="b_email"></span></p>
            <p><img src="../img/svg/star.svg" alt=""> Heroi Favorito: <span id="b_heroi"> </span></span>
            </p>
            <p><img src="../img/svg/date.svg" alt="">Data de entrada no forum:</span>
            </p>

        </div>
        `
    }
    else {
        alert('Não deu certo...');
    }
}




// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var heroiFavorito = sessionStorage.HEROI_USUARIO;


    var nomeUsuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // alert(`Bem vindo Usuario ${nome}`)
        if (nomeUsuario != undefined) {
            nomeUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
        b_email.innerHTML = email;
        b_heroi.innerHTML = heroiFavorito;


        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento(loading)

function aguardar() {
}



// Validaçoes cadastro
function verificarEmail() {
    var testeMail = email_input.value

    if (testeMail.indexOf(".") > -1 && testeMail.indexOf("@") > -1) {
        email_input.style.border = "2px solid green";
        avisoInputMail.innerHTML = 'email valido.';
        avisoInputMail.style.fontSize = '12px';
        avisoInputMail.style.color = 'green';
    } else if (testeMail == '') {
        email_input.style.border = "2px solid #b8860b";
        avisoInputMail.innerHTML = 'Campo vazio.';
        avisoInputMail.style.fontSize = '12px';
        avisoInputMail.style.color = '#b8860b';
    } else {
        email_input.style.border = "2px solid red";
        avisoInputMail.innerHTML = 'email invalido.';
        avisoInputMail.style.fontSize = '12px';
        avisoInputMail.style.color = 'red';
    }
}

function ValidaSenha() {
    var testeSenha = senha_input.value

    if (testeSenha.length >= 6) {
        senha_input.style.border = "2px solid green";
        avisoInputSenha.innerHTML = 'Senha válida.';
        avisoInputSenha.style.fontSize = '12px';
        avisoInputSenha.style.color = 'green';
    } else if (testeSenha == '') {
        senha_input.style.border = "2px solid #b8860b";
        avisoInputSenha.innerHTML = 'Campo vazio.';
        avisoInputSenha.style.fontSize = '12px';
        avisoInputSenha.style.color = '#b8860b';
    } else {
        senha_input.style.border = "2px solid red";
        avisoInputSenha.innerHTML = 'Senha invalida.';
        avisoInputSenha.style.fontSize = '12px';
        avisoInputSenha.style.color = 'red';
    }
}

function ValidaConfirmarSenha() {

    var testeConfirmarSenha = confirmacao_senha_input.value
    var testeSenha = senha_input.value

    if (testeConfirmarSenha == testeSenha) {
        confirmacao_senha_input.style.border = "2px solid green";
        avisoInputConfirmarSenha.innerHTML = 'Senha confirmada.';
        avisoInputConfirmarSenha.style.fontSize = '12px';
        avisoInputConfirmarSenha.style.color = 'green';
    } else if (testeConfirmarSenha == '') {
        confirmacao_senha_input.style.border = "2px solid #b8860b";
        avisoInputConfirmarSenha.innerHTML = 'Campo vazio.';
        avisoInputConfirmarSenha.style.fontSize = '12px';
        avisoInputConfirmarSenha.style.color = '#b8860b';
    } else {
        confirmacao_senha_input.style.border = "2px solid red";
        avisoInputConfirmarSenha.innerHTML = 'Senhas não são iguais.';
        avisoInputConfirmarSenha.style.fontSize = '12px';
        avisoInputConfirmarSenha.style.color = 'red';
    }
}