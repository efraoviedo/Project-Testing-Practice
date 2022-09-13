function reverseString(str) {
    if (str === '')
      return '';
    else
      return reverseString(str.substring(1)) + str.charAt(0);
  }
  
  
  let str = 'developper'
  console.log('The original string is: ' + str);
  const output = reverseString(str);
  console.log('The reversed string is: ' + output);

module.exports = reverseString;