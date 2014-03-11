var parasitic = require("../ParasiticCombination");
var pseudo = require("../PseudoClassic");
var functional = require("../Functional");
var benchRunner = require("../benchExecutor");

console.log("Parasitic:");
benchRunner.run(function(){
	new parasitic.Pessoa("maroto", 12, "123");
})

console.log("Pseudo:");
benchRunner.run(function(){
	new pseudo.Pessoa("maroto", 12, "123");
})

console.log("Functional:");
benchRunner.run(function(){
	functional.pessoa("maroto", 12, "123");
})
