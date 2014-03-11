var pseudo = require("../../PseudoClassic.js");
var benchRunner = require("../../benchRunner.js");

benchRunner.run(function(){
	new pseudo.Pessoa("maroto", 12, "123");
})