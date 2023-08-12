const form = document.getElementById('form-inclusao-contato');
const nomes = [];

let contatos = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    incluiContato();
    atualizaAgenda();
})

function incluiContato() {
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    if(nomes.includes(nomeContato.value)) {
        alert(`O contato de ${nomeContato.value} já foi adicionado.`);

    } else {
        nomes.push(nomeContato.value);

        let contato = '<tr>';
        contato += `<td>${nomeContato.value}</td>`;
        contato += `<td>${numeroContato.value}</td>`;
        contato += '</tr>';

        contatos += contato;

        nomeContato.value = '';
        numeroContato.value = '';
    }    
}

function atualizaAgenda() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = contatos;
}