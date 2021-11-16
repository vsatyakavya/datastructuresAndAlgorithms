class BinartTree{
    constructor(value){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}


function branchSums(root){
   const sums = [];
   console.log(",.."+ sums);
   calculateBranchSums(root, 0, sums);
   return sums;
}



function calculateBranchSums(node, runningSum, sums){
    if(!node) return;

    const newRunningSum = runningSum + node.value;

    if(!node.left && !node.right){
        sums.push(newRunningSum);
        return ;
    }


    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
    
}



  console.log(branchSums(nodes1))
