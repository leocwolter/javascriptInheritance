var parasitic = require("../../ParasiticCombination");
var benchRunner = require("../../benchRunner");

var pf = new parasitic.PessoaFisica("maroto", 12, "123");
benchRunner.run(function(){
	pf.fala();
})