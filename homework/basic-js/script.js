module.exports = {
  sum: function(num1, num2){
    var total = num1 + num2;
    return total;
  },
  isEqual: function(num1, num2){
    return num1 === num2;
  },
  isEven: function(num){
    if ( num % 2 == 0){
      return true;
    } else {
      return false;
    }

  },
  isDivisible: function(num1,num2){
  return num1 % num2 === 0
  },
  discountPercentage: function(amount,discount){
    if(discount > 100 || discount < 0){
      return "please enter a number between 0 and 100";
    } else {
      var totalDis = amount * (discount/100);
      return totalDis;
    }

  },
  isVowel: function(letter){
    if(letter == "a" | "e" | "i" | "o" | "u"){
      return true;
    }else {
      return false;
    }
  },
  celsiusToFahrenheit: function(temp){
    var faren = temp * 1.8 + 32;
    return faren; 
  },
  biggestOfThree: function(num1, num2, num3){
    var max = Math.max(num1, num2, num3);
   return max;
  },
  // Bonus
  federalIncomeTaxCalculator: function(salary){
    if (salary >= 439200){
      console.log("you are in the 39.6% Tax Bracket" + "Your Taxes are: ");
      return salary * 0.396;
    } else if( salary >= 411501){
      rconsole.log("you are in the 35% Tax Bracket" + "Your Taxes are: ");
      return salary * 0.35;
    } else if( salary >= 209850){
      console.log("you are in the 33% Tax Bracket" + "Your Taxes are: ");
      return salary * 0.33;
    } else if( salary >= 129601){
      console.log("you are in the 28% Tax Bracket" + "Your Taxes are: ");
      return salary * 0.28;
    } else if( salary >= 50201){
      console.log("you are in the 25% Tax Bracket" + "Your Taxes are: ");
      return salary * 0.25;
    } else if( salary >= 13151){
      console.log("you are in the 15% Tax Bracket" + "Your Taxes are: ");
      return salary * 0.15;
    } else if( salary >= 1){
      console.log("you are in the 10% Tax Bracket" + "Your Taxes are: ");
      return salary * 0.10;
    } else{
      return "you are inputting some non-taxable values";
    }
}

};
