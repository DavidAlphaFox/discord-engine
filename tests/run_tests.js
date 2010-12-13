require.paths.push('../');
require.paths.push('./');

require('engine');
sys = require('sys');

JSON.stringify = function(mess) { JSON.encode(mess); }

describe = function(series, obj) {

	sys.puts(series.toUpperCase().color('yellow')+":");

	var passed = 0, failed = 0, total = 0;

	Object.each(obj, function(test, desc) {

		total++;
		try {
			test();
		} catch (e) {
			failed++;
			sys.puts("\t"+desc.color('red'));
			sys.puts("\t\t====> "+e);
			return;
		}

		passed++;

		sys.puts("\t"+desc.color('green'));

	});

	sys.puts(
		"PASSED".color('green')+": "+passed+
		" / "+total
	);


};

assert = require('assert');

require('messaging');

process.exit();