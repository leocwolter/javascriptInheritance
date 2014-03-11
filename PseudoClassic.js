var Pessoa = function(nome, idade){
	this.nome = nome;
	this.idade = idade;
}

Pessoa.prototype = {
	fala:function(){
		return "Olá, meu nome é "+this.nome+" e eu tenho "+this.idade+" anos.";
	},
	anda:function(){
		return "pessoas sabem andar!";
	}
}


var PessoaFisica = function(nome, idade, cpf){
	Pessoa.call(this, nome, idade);
	var cpf = cpf;
	this.pegaCpf = function(){
		return cpf;
	}
}

PessoaFisica.prototype = new Pessoa();

PessoaFisica.prototype.fala = function(){
	return Pessoa.prototype.fala.call(this)+" Meu CPF é "+this.pegaCpf();
}

PessoaFisica.prototype.outro = function(){
	return "esse foi só pra testar!";
}


module.exports = PessoaFisica;