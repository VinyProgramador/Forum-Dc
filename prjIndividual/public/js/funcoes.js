function imgDePerfil() {
    var heroiFavorito = sessionStorage.HEROI_USUARIO;
    var img1 = 'https://i0.wp.com/cebolaverde.com.br/wp-content/uploads/2020/07/Clark-Kent.jpg?resize=585%2C585&ssl=1'
    var img2 = 'https://img.quizur.com/f/img61bfa9f3b28435.76703213.jpg?lastEdited=1639950844'
    var img3 = 'https://www.planocritico.com/wp-content/uploads/2017/06/wonder-woman-cronologia-plano-critico-mulher-maravilha-.jpg'
    var img4 = 'http://pm1.narvii.com/6318/a4764bbd64544331179644724d1e8f4957b3f506_00.jpg';
    var img5 = 'https://i.pinimg.com/474x/ef/84/26/ef8426d4ce91e032268399172d317c23.jpg';
    var img6 = 'https://64.media.tumblr.com/dd3bcc2984261045111cf32bffb2550a/bbf4b1a712f447be-79/s540x810/08bd3439e424b2027b0eb7986dc7f3d769d310e1.jpg';
    var img7 = 'https://ovicio.com.br/wp-content/uploads/2020/08/20200814-aquaman-1024x576.jpg';
    var img8 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb-in7-6GiE9F1vCiFXVI5EOYjvogpfYHnniq-0YM8NPx6tat9Up3FNWI5Zlv7VlRdJJ0&usqp=CAU';
    var img9 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_7ufHQJQEHaRpJ0kFT1MR9abDPC8UJwMVhrt7i50cNZ-tO2Gje7SpqHhphNq4bT3Qtw&usqp=CAU';
    var img10 = 'http://pm1.narvii.com/6900/14375c6f2550bc2afa9cb6e30564ba7029520989r1-750-511v2_uhq.jpg';



    var listaHeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for (contador = 0; contador <= listaHeros.length; contador++) {
        if (heroiFavorito == 'SuperMan') {
            mudarImgId.innerHTML = `
         <img src="${img1}" class="perfilUserImg" alt="">
        `
        } else if (heroiFavorito == 'Batman') {
            mudarImgId.innerHTML = `
        <img src="${img2}" class="perfilUserImg" alt="">
       `
        } else if (heroiFavorito == 'Wonder-Woman') {
            mudarImgId.innerHTML = `
        <img src="${img3}" class="perfilUserImg" alt="">
       `
        } else if (heroiFavorito == 'Lanterna-Verde') {
            mudarImgId.innerHTML = `
        <img src="${img4}" class="perfilUserImg" alt="">
       `
        } else if (heroiFavorito == 'Cyborg') {
            mudarImgId.innerHTML = `
        <img src="${img5}" class="perfilUserImg" alt="">
       `
        } else if (heroiFavorito == 'Robin') {
            mudarImgId.innerHTML = `
        <img src="${img6}" class="perfilUserImg" alt="">
       `
        } else if (heroiFavorito == 'Aquaman') {
            mudarImgId.innerHTML = `
        <img src="${img7}" class="perfilUserImg" alt="">
       `
        } else if (heroiFavorito == 'Super-Girl') {
            mudarImgId.innerHTML = `
        <img src="${img8}" class="perfilUserImg" alt="">
       `
        } else if (heroiFavorito == 'Estelar') {
            mudarImgId.innerHTML = `
        <img src="${img9}" class="perfilUserImg" alt="">
       `
        } else {
            mudarImgId.innerHTML = `
        <img src="${img10}" class="perfilUserImg" alt="">
       `
        }
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

function aguardar() {}



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