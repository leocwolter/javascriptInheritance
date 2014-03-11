var functional = require("../Functional");
var pseudo = require("../PseudoClassic");
var parasitic = require("../ParasiticCombination");
var benchRunner = require("../benchExecutor");

console.log("Parasitic:");
var p = new parasitic.Pessoa("maroto", 12, "123");
benchRunner.run(function(){
	p.fala();
});

console.log("Pseudo:");
var p = new pseudo.Pessoa("maroto", 12, "123");
benchRunner.run(function(){
	p.fala();
});

console.log("Functional:");
var p = functional.pessoa("maroto", 12, "123");
benchRunner.run(function(){
	p.fala();
})