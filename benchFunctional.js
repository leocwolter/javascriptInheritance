var functionalPessoaFisica = require("./Functional");

const TIMES = 1000 * 1000;

var startTime;

var beginBench = function(){
	startTime = new Date().getTime();
}

var printBench = function(){
	console.log(new Date().getTime() - startTime);
}

console.log("Functional:");
beginBench();
for (var i = 0; i < TIMES; i++) {
	var pf = functionalPessoaFisica("maroto", 12, "123");
	pf.fala();
};
printBench();