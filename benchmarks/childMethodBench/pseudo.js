var pseudo = require("../../PseudoClassic.js");
var benchRunner = require("../../benchRunner.js");

var pf = new pseudo.PessoaFisica("maroto", 12, "123");
benchRunner.run(function(){
	pf.fala();
})