var fs = require('fs');
var parasitic = require('./ParasiticCombination');
var pseudo = require('./PseudoClassic');
var functional = require('./Functional');

var parasiticPF = new parasitic.PessoaFisica("maroto", 12, "123");
var pseudoPF = new pseudo.PessoaFisica("maroto", 12, "123");
var functionalPF = functional.pessoaFisica("maroto", 12, "123");

console.log("Parasitic instance:")
console.log(parasiticPF);
console.log("\nParasitic prototype:")
console.log(parasitic.PessoaFisica.prototype);
console.log("--------------------------")

console.log("Pseudo instance:")
console.log(pseudoPF);
console.log("\nPseudo prototype:")
console.log(pseudo.PessoaFisica.prototype);
console.log("--------------------------")

console.log("Functional instance:")
console.log(functionalPF);
console.log("\nFunctional prototype:")
console.log(functional.pessoaFisica.prototype);
console.log("--------------------------")

fs.readdir("./benchmarks", function(err, data){
	if(typeof data !== 'undefined'){
		for (var i = 0; i < data.length; i++) {
			var benchName = data[i];
			console.log("--- Rodando "+benchName + " ---");
			require("./benchmarks/"+benchName);		
		}
	}
});