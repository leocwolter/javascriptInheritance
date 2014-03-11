var pessoa = function(nome, idade){
	return {
		nome : nome,
		idade : idade,
		fala:function(){
			return "Olá, meu nome é "+this.nome+" e eu tenho "+this.idade+" anos.";
		},
	
		anda:function(){
			return "pessoas sabem andar!";
		}
	};
}


var pessoaFisica =  function(nome, idade, cpf){
	var that = pessoa(nome, idade);
	var cpf = cpf;

	that.pegaCpf = function(){
		return cpf;
	};
	
	that.fala =  function(){
		return pessoa().fala.call(this)+" Meu CPF é "+that.pegaCpf();
	};

	that.outro = function(){
		return "esse foi só pra testar!";
	};

	return that;
}

module.exports = pessoaFisica;
