function sequence(array, sequence){
    let seqIdx = 0;
    for(const num of array){
        if(seqIdx === sequence.length) break;
        if(sequence[seqIdx] === num) seqIdx++;
    }

    return seqIdx === sequence.length;

}

const array=[5,1,22,25, 6, -1, 8, 10]

const subSequence = [1, 6, -1, 10]

console.log(sequence(array, subSequence))