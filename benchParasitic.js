var ParasiticPessoaFisica = require("./ParasiticCombination.js");

const TIMES = 1000 * 1000;

var startTime;

var beginBench = function(){
	startTime = new Date().getTime();
}

var printBench = function(){
	console.log(new Date().getTime() - startTime);
}

console.log("Parasitic Combination:");
beginBench();
for (var i = 0; i < TIMES; i++) {
	var pf = new ParasiticPessoaFisica("maroto", 12, "123");
	pf.fala();
};
printBench();