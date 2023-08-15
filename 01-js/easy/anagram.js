/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(st){
  var arr_=st.split("")
  arr_=arr_.sort()
  return arr_.join("")
}
function isAnagram(str1, str2) {
  sorted_1=sort(str1)
  sorted_2=sort(str2)
  if(sorted_1==sorted_2){
    return true
  }
  else{
    return false
  }
}
var output=isAnagram('openai','aiopen')
console.log(output)
module.exports = isAnagram;
