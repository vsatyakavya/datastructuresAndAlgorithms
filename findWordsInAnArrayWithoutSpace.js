function findWordsWithoutSpace(array){
   const finalArray = []
    for(const word of array){
       const newWord = word.trim();
       if(!(newWord.includes(" "))){
           finalArray.push(newWord)
       }
    }

    return finalArray;
}


const names = ["satya", "kav ya", " varri "]

console.log(findWordsWithoutSpace(names))