var parasitic = require("../../ParasiticCombination");
var benchRunner = require("../../benchRunner");

var p = new parasitic.Pessoa("maroto", 12, "123");
benchRunner.run(function(){
	p.fala();
})