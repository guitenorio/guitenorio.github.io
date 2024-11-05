document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        document.getElementById('form-contato').reset(); // Limpar o formulário após o envio
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
