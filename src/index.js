module.exports = function check(str, bracketsConfig) {
  let openingBrackets = [];
  let closingBrackets = [];
  let arr = [];

  if(str.length % 2) return false;

  for(let i = 0; i < bracketsConfig.length; i++) {
    for(let j = 0; j < bracketsConfig[i].length; j++) {
      openingBrackets.push(bracketsConfig[i][0]);
      closingBrackets.push(bracketsConfig[i][1]);
    }
  }

  openingBrackets = [...new Set(openingBrackets)];
  closingBrackets = [...new Set(closingBrackets)];
  
  for(let i = 0; i < str.length; i++) {
    if(closingBrackets.includes(str[i])) {
      if(openingBrackets.indexOf(arr[arr.length - 1]) === closingBrackets.indexOf(str[i])) arr.pop();
      else arr.push(str[i]);
    }
    else arr.push(str[i]);
  }

  return arr.length === 0;
}
