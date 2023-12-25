function validarCNPJ(cnpj){
    $.ajax({
        'url': 'https://receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^\d]+/g,''),
        'type': 'Get',
        'dataType': 'jsonp',
        'success': function(data){
            console.log(data);

            document.getElementById('razaoSocial').value = data.nome;
            document.getElementById('nomeFantasia').value = data.fantasia;
            document.getElementById('abertura').value = data.abertura;
            document.getElementById('situacao').value = data.situacao;
            document.getElementById('endereco').value = data.logradouro;
            document.getElementById('municipio').value = data.municipio;
            document.getElementById('uf').value = data.uf;
            document.getElementById('tel').value = data.telefone;
        }
    })
}