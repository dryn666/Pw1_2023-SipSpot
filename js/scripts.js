
function mostrarMensagemReserva() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var quantidade = document.getElementById("quantidade").value;
    var data = document.getElementById("data").value;

    if (nome === "" || telefone === "" || quantidade === "" || data === "") {
        alert("Por favor, complete todos os campos obrigatórios.");
    } else {
        var mensagemModal = document.getElementById("mensagem-modal");
        mensagemModal.style.display = "block";

        setTimeout(function () {
            mensagemModal.style.display = "none";
            window.location.href = "contato.html";
        }, 3000);
    }
}

function validarTelefone(input) {
    input.value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
}

function mostrarMensagemContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;
    var mensagemEnviada = document.getElementById("mensagem-enviada");

    if (nome === "" || telefone === "" || mensagem === "") {
        alert("Por favor, complete todos os campos obrigatórios.");
    } else {
        mensagemEnviada.style.display = "block"; // Mostrar mensagem de sucesso
        document.getElementById("form-contato").reset(); // Limpar formulário
        setTimeout(function() {
            mensagemEnviada.style.display = "none"; // Esconder mensagem após alguns segundos
        }, 3000); // Tempo em milissegundos (3 segundos)
    }
}

function fecharModal() {
    var mensagemModal = document.getElementById("mensagem-modal");
    mensagemModal.style.display = "none";
}
