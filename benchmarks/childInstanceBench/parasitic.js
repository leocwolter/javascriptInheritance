var parasitic = require("../../ParasiticCombination");
var benchRunner = require("../../benchRunner");

benchRunner.run(function(){
	new parasitic.PessoaFisica("maroto", 12, "123");
})