var parasitic = require("../../ParasiticCombination");
var benchRunner = require("../../benchRunner");

benchRunner.run(function(){
	new parasitic.Pessoa("maroto", 12, "123");
})