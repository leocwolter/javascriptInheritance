var parasitic = require("../ParasiticCombination");
var pseudo = require("../PseudoClassic");
var functional = require("../Functional");
var benchRunner = require("../benchExecutor");


console.log("Parasitic:");
benchRunner.run(function(){
	new parasitic.PessoaFisica("maroto", 12, "123");
})


console.log("Pseudo:");
benchRunner.run(function(){
	new pseudo.PessoaFisica("maroto", 12, "123");
})


console.log("Functional:");
benchRunner.run(function(){
	functional.pessoaFisica("maroto", 12, "123");
})

