module.exports = function check(str, bracketsConfig) {
  function check(str, bracketsConfig) {
	console.log(bracketsConfig.flat());
	let arr = [];
	let openBrackets = [];
	let closeBrackets = [];
	
	
	bracketsConfig.forEach((el) => {
		openBrackets.push(el[0]);
		closeBrackets.push(el[1]);
	});

	for(let i = 0; i < str.length; i++) {
		
		if(str.length % 2 !== 0) return false;
		if(bracketsConfig.flat().indexOf(str[i]) !== -1) return false;

		//check for special case
		if(closeBrackets.indexOf(str[i] !== -1) && openBrackets.indexOf(str[i]) !== -1) {
			if(str[i] === arr.at(-1)) arr.pop();
			else arr.push(str[i]);
			continue;
		}

		if(openBrackets.indexOf(str[i]) !== -1) {
			arr.push(str[i]);
		}
		else if(closeBrackets.indexOf(str[i]) !== -1) {
			if(closeBrackets.indexOf(str[i]) === openBrackets.indexOf(arr.at(-1))) arr.pop();
		}
	}

	return arr.length === 0;
}




}
