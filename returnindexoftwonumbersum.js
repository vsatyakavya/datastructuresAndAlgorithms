// O(n) time and O(n) space

function twoNumberSum(array , target){
    const nums ={};
  
    for(let i = 0 ; i< array.length; i++){
        const match = target - array[i];
        if(match in nums){
          return [nums[match] , i]
        }
        else{
            nums[array[i]]  = i;
        }
  
    }
  
    
    return [];
  }
  
  const nums = [3, 5, -4,8, 11, 1, -1,6];
  const target = 10
  
  console.log(twoNumberSum(nums, target))