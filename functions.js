// TODO: add your solutions here!
// I know not to use numbers to annote normally! ie, 1), 2), etc.

1) function combineWords(word1, word2) {
return word1 + word2;
}

var result = combineWords('dog', 'house');
console.log(result);
// displays 'doghouse'

2) function repeatPhrase(phrase, n) {
    for (var i = 0; i<n; i++)
    console.log(phrase);
}

repeatPhrase("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello

3) function toTheNthPower(number, power) {
    var result = 1;
    for (var i =0; i < power; i++) {
    result *= number;
}
return result;
}

var result = toTheNthPower(4, 5);
console.log(result);
// displays 1024
// if 4 was the number, loop initiates and i becomes 1, result= (result) x number aka 4x1,
//now var result = 4, i becomes 2, result= 16, etc

4) function areaOfACircle(radius) {
    var r = radius * radius;
    var area = Math.PI * r;
    return area;
}

var result = areaOfACircle(2);
console.log(result);
// displays approximately 12.57.
//Lol "PI" must be completely capitalized-don't forget!

5) function pythagoreanTheorem(a, b) {
    var sideOne = (a*a)
    var sideTwo = (b*b)
    return Math.sqrt (sideOne + sideTwo);
}

var result = pythagoreanTheorem(3, 4);
console.log(result);
// should display 5;
//Nice.

6) function isXEvenlyDivisibleByY(x, y) {
  if (x%y === 0)
    return result;

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);
// displays true


7) function countVowels(word) {
    var vowels = 0;
    word = word.toLowerCase();
    for (var i = 0; i < word.length; i++) {
        if (word [i] === 'a' || word [i] === 'e' || word [i] === 'i' || word [i] === 'o' || word [i] === 'u') {
        vowels ++ ; }
    }
    return vowels;
}

var result = countVowels("stealing");
console.log(result);
// displays 3
// [i] goes in brackets otherwise it would be referenced as a function (), etc.

8)  function findWdi(arr){
        for (var i=0; i < arr.length; i++) {
          if (arr[i] === 'wdi') {
        return true;
       }
    }
    return false;
    }
    // if its an ARRAY, the number refers to the INDEX number. Duh! Don't forget!!
9) function printTriangle(length) {
    for (var i = 1; i <= length; i++) {
        var level = '';

        for (var j =0; j < i; j++) {
            level += '*';
        }
        console.log(level);
      }
   }
   10) pyramid challenge
   // I was way past my time cap here and submitted it to stack overflow to get some interesting feedback
