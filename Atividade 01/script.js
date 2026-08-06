//selecionar o formulario para interceptar o evento

const form=document.querySelector('form')

//adicionar ouvinte para o evento enviar (submit)
form.addEventListener('submit', function(event) {
    //impedir o recarregamento dessa pagina 
    event.preventDefault();

    //selecionar os elementos do DOM conforme necessário
    const nome= document.getElementById('nome').value
    const email= document.getElementById('email').value

    //validar os campos que o usuario preenche; Verificar se o email tem @  
    // atraves do metodo indexOf retornar -1 se nao encontrar o caracter 
    if(email.indexOf("@")===-1) {
        //se não tem '@' mensagem de erro
        window.alert("Erro: o e-mail não possui o caracter @");
    } else {
        window.alert("Seja bem vindo ao nosso site," + nome + "! Sua inscrição foi realizada com sucesso");

        //limpar campos
        form.reset();
    }
})