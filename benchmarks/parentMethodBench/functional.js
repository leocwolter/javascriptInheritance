var functional = require("../../Functional");
var benchRunner = require("../../benchRunner");


var p = functional.pessoa("maroto", 12, "123");
benchRunner.run(function(){
	p.fala();
})