var parasitic = require("../ParasiticCombination");
var pseudo = require("../PseudoClassic");
var functional = require("../Functional");
var benchRunner = require("../benchExecutor");

console.log("Parasitic:");
var pf = new parasitic.PessoaFisica("maroto", 12, "123");
benchRunner.run(function(){
	pf.fala();
})

console.log("Pseudo:");
var pf = new pseudo.PessoaFisica("maroto", 12, "123");
benchRunner.run(function(){
	pf.fala();
})

console.log("Functional:");
var pf = functional.pessoaFisica("maroto", 12, "123");
benchRunner.run(function(){
	pf.fala();
})