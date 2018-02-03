const accum = (s) => {
  let result = "";

  //this first loop cycles through the indices of String s.
  for(let sIndex = 0; sIndex < s.length; sIndex++){
    //If it isn't the first letter, shove some '-' between each set of characters.
    if(sIndex !== 0){
    result = result + "-";
    }
    //this second loop figures out how many times the letter should be repeated.
    for(let letterCount = 0; letterCount <= sIndex; letterCount++){
      //If this is the first letter in the sequence, then make it uppercase.
      //otherwise, make it lowercase. statement is repeated until the
      //letter has as many copies as it's supposed to.
      if(letterCount === 0){
        result = result + s[sIndex].toUpperCase();
        } else {
        result = result + s[sIndex].toLowerCase();
        }
      }
    }
  }
  return result;
}
