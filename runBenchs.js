var fs = require('fs');

fs.readdir("./benchmarks", function(err, data){
	var bench = [];
	if(typeof data !== 'undefined'){
		for (var i = 0; i < data.length; i++) {
			var benchName = data[i];
			console.log("--- Rodando "+benchName + " ---");
			require("./benchmarks/"+benchName);		
		}

	}
})