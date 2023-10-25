//console.log('Formulario teste!!!');
//var inputs = document.getElementsByClassName('texto-input') // retorna uma lista de elementos
//var input = document.querySelector('.texto-input') //retorna o primeiro elemento a ser encontrado

// retorna um elemento com o id
var nome = document.getElementById('nome_txt'); //acessando o input nome
var email = document.getElementById('email_txt');//acessando o input email
var confirmacao = document.getElementById('confirma-email_txt');//acessando o input confirma email
var telefone = document.getElementById('telefone_txt');
var botao = document.getElementById('enviar_btn');//acessando o botao

//Criando uma função
	//- Mesmas regras de nomenclatura de uma variavel

//Caso ocorra uma falha na validacao a função deverá retornar o valor false

function enviar_dados(){
	if(nome.value.length < 3){
		alert('O nome precisa possuir pelo menos 3 caracteres');
		return false;//encerra a função e retorna o valor logico false
	}

	if(email.value != confirmacao.value){
		alert('Os email estão diferentes');
		return false;//encerra a função e retorna o valor logico false
	}

	if(telefone.value.length != 11){
		alert('O telefone deve possuir 11 caracteres');
		return false;//encerra a função e retorna o valor logico false	
	}

	//para validar o assunto é necessário o conteudo ter pelo menos 6 caracteres.
	//para validar a mensagem é necessário possuir pelo menos 20 caracteres.

	//Caso todos os campos sejam validados, exibir no alert todo o conteudo do formulario
	alert(nome.value + ' - ' + email.value);
	return true; //encerra a função e retorna o valor logico true
}

function gravar_banco_dados(){
	if(enviar_dados() == true){
		//grava no banco de dados
	}
}

botao.onclick = enviar_dados;