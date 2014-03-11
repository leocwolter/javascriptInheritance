var functional = require("../../Functional");
var benchRunner = require("../../benchRunner");


var pf = functional.pessoaFisica("maroto", 12, "123");
benchRunner.run(function(){
	pf.fala();
})