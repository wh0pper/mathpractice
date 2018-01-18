$(document).ready(function() {
  $("#factorial").click(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#number1").val());

    var result = factorial(number1);

    $("#result").text(result);

    });
  $("#palindrome").click(function(event) {
    event.preventDefault();

    var inputString = $("#number1").val();

    if (palindrome(inputString)){
      $("#result").text("That is a palindrome");
    } else {
      $("#result").text("That is not a palindrome");
    }

  });
});

var palindromeResult = function(parameter){
  var j = parameter.length-1
  for (var i=0 ; i<parameter.length/2 ; i++){
    if (parameter.charAt(i)!=parameter.charAt(j)){
      return false;
    }
    else {
    j--;
    }
  } return true;
}


var factorialRecursive = function(parameter) {
  if ((parameter-1) > 0) {
    return result = parameter * factorial(parameter-1)
  } else {
    return 1;
  }
}

var factorial = function(parameter) {
  result = 1;
  for (var i = 2; i <= parameter; i++) {
    result = result * i;
  }
  return result;
}

var returnPrimes = function(parameter) {
  //create array containing 2-parameter
  var lessThan = [];
  for (var i=0; i<parameter-1; i++) {
    lessThan[i]=i+2;
  }

  //remove primes
  for (var factor = 2; factor<parameter; factor++) {
    for (var j = 0; j<lessThan.length; j++) {
      if (lessThan[j]!=factor && (lessThan[j]%factor)===0) {
        lessThan[j]=NaN;
      }
    }
  }

  //remove NaN
  for (var k=0; k<lessThan.length; k++) {
    if (isNaN(lessThan[k])) {
      var resultArray = lessThan.pop(k);
    }
  }
  console.log(lessThan);
  return lessThan;
}
