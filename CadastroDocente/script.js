const form=document.querySelector('form')


form.addEventListener('submit', function(event) {
   
    event.preventDefault();

    
    const nome= document.getElementById('nome').value;

     let senha = document.getElementById('senha').value;
     confirmarSenha = document.getElementById('confirmarSenha').value;

    console.log('entrou na função')
    if(senha == confirmarSenha) {
       window.alert("Seja bem vindo a nossa instituição," + nome + "! Ninguém Cresce Sozinho - Shunji Nishimura");
    } else {
        window.alert("Erro: As senhas não coincidem.");
        return;
    }
});