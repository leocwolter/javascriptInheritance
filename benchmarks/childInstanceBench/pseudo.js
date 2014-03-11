var pseudo = require("../../PseudoClassic.js");
var benchRunner = require("../../benchRunner.js");

benchRunner.run(function(){
	new pseudo.PessoaFisica("maroto", 12, "123");
})