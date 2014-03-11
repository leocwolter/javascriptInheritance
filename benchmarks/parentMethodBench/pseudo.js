var pseudo = require("../../PseudoClassic.js");
var benchRunner = require("../../benchRunner.js");

var p = new pseudo.Pessoa("maroto", 12, "123");
benchRunner.run(function(){
	p.fala();
})