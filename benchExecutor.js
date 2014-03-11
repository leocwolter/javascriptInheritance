var BenchExecutor = function(){
	const TIMES = 1000 * 1000;

	var startTime;

	var beginBench = function(){
		startTime = new Date().getTime();
	}

	var printBench = function(){
		console.log(new Date().getTime() - startTime);
	}

	var run = function(callback){
		beginBench();
		for (var i = 0; i < TIMES; i++) {
			callback();
		};
		printBench();
	}

	return {run: run};
}

module.exports = new BenchExecutor();