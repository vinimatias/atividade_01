// Aguarda o documento HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos do HTML que vamos manipular
    const number1Input = document.getElementById('number1');
    const number2Input = document.getElementById('number2');
    const calculateButton = document.getElementById('calculateButton');
    const resultValueSpan = document.getElementById('resultValue');

    // Função para realizar a soma
    function sumNumbers() {
        // Pega os valores dos campos de input.
        // Usa parseFloat para converter o texto em número (com suporte a decimais).
        // Se o campo estiver vazio, considera o valor como 0.
        const value1 = parseFloat(number1Input.value) || 0;
        const value2 = parseFloat(number2Input.value) || 0;

        // Calcula a soma
        const sum = value1 + value2;

        // Atualiza o texto do elemento 'span' com o resultado da soma
        resultValueSpan.textContent = sum;
    }

    // Adiciona um "ouvinte de evento" ao botão. A função sumNumbers será chamada sempre que o botão for clicado.
    calculateButton.addEventListener('click', sumNumbers);

});