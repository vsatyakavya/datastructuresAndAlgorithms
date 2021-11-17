


//O(n) time && O(n) O(1) space
function sequence(array, sequence){
    let seqIdx = 0;
    for(const num of array){
        if(seqIdx === sequence.length) break;
        if(sequence[seqIdx] === num) seqIdx++;
    }
   //if the seqIdx is equal to length of an sequence array. that means all the numbers passed a condition num === sequence[seqIdx]
   //that means all the numbers are matched with an main array
    return seqIdx === sequence.length;

}

const array=[5,1,22,25, 6, -1, 8, 10]

const subSequence = [1, 6, -1, 10]

console.log(sequence(array, subSequence))