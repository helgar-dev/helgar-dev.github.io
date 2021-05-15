main();

function main()
{
	var cores =
	[
		'#D2222C',
		'#007CC3',
		'#202020',
		'#43AD4E',
		'#557CF2'
	];
	
	var corRand = randomInt(0, cores.length);
	
	document.querySelector(".containerDivLogo").style.backgroundColor = cores[corRand];
	document.querySelector("body").style.backgroundColor = cores[corRand];
	
}

function randomInt(min, max) 
{
	// https://dirask.com/posts/JavaScript-Math-random-method-example-x1R6G1?gclid=EAIaIQobChMIn5CJ45jg7wIVVYGRCh04UgrlEAAYASAAEgKQp_D_BwE&utm_source=google_search&utm_medium=cpc&utm_campaign=js_math&gclid=EAIaIQobChMIn5CJ45jg7wIVVYGRCh04UgrlEAAYASAAEgKQp_D_BwE
	return min + Math.floor((max - min) * Math.random());
}