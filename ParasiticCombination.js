
var newObject = function(data){
	var child = data.constructor;
	if(data.parent){
		var parent = data.parent;
		var parentCopy = Object.create(parent.prototype);
		parentCopy.constructor = child;
		child.prototype = parentCopy;
		child.prototype.parent = parent.prototype;
	}

	for(method in data.methods){
		child.prototype[method] = data.methods[method];
	}

	return child;
}

var Pessoa = newObject({

	constructor : function(nome, idade){
		this.nome = nome;
		this.idade = idade;
	},

	methods: {
		fala:function(){
			return "Olá, meu nome é "+this.nome+" e eu tenho "+this.idade+" anos.";
		},
	
		anda:function(){
			return "pessoas sabem andar!";
		}
	}
});

var PessoaFisica = newObject({
	parent: Pessoa,

	constructor: function(nome, idade, cpf){
		Pessoa.call(this, nome, idade);
		var cpf = cpf;
		this.pegaCpf = function(){
			return cpf;
		}
	},
	
	methods: {
		fala: function(){
			return this.parent.fala.call(this)+" Meu CPF é "+this.pegaCpf();
		},
		outro: function(){
			return "esse foi só pra testar!";
		}
	}
});


module.exports = {PessoaFisica: PessoaFisica, Pessoa: Pessoa};
