function validarCNPJ(cnpj) {
   
    console.log('Validando CNPJ:', cnpj);

 
    if (cnpj.length !== 14) {
        console.log('CNPJ inválido! O CNPJ deve ter 14 dígitos.');
    } else {
        console.log('CNPJ válido!');
    }
}

function consultarCNPJ(cnpj) {
    
    console.log('Consultando CNPJ:', cnpj);

    atualizarCamposExemplo();
}

function atualizarCamposExemplo() {
   
    document.getElementById('razaoSocial').value = 'Exemplo de Razão Social';
    document.getElementById('nomeFantasia').value = 'Exemplo de Nome Fantasia';
    document.getElementById('abertura').value = '01/01/2024';
    document.getElementById('situacao').value = 'Ativo';
    document.getElementById('endereco').value = 'Exemplo de Endereço';
    document.getElementById('municipio').value = 'Exemplo de Município';
    document.getElementById('uf').value = 'UF';
    document.getElementById('tel').value = '(00) 0000-0000';
}
