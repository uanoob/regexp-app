// Regular Expression
let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacters Symbols
re = /^h/i; // Must start with
re = /world$/i; // Must end with
re = /^hello$/i; // Must begin and end
re = /h.llo/i; // Matches any ONE characters
re = /h*llo/i; // Matches any characters 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character

// Brakets [] - Character Sets
re = /gr[ea]y/i; // Must be an a or e
re = /[GF]rey/; // Must be  a G or F
re = /[^GF]rey/; // Match anything exept  a G or F
re = /[A-Z]/; // Any uppercase letter
re = /[a-z]/; // Any lowercase letter
re = /[A-Za-z]/; // Any letter
re = /[0-9][0-9]ray/; // Any digit

// Braces {} - Quentyfires
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur range between {m, n } amount of times
re = /Hel{2,}o/i; // Must occur least {m} amount of times

// Parentheses - Grouping
re = /^([0-9]x){3}$/;

// String to match
const str = '1x2x3x';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT matched ${re.source}`);
  }
}

reTest(re, str);
