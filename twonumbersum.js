// O(n) time and O(n) space

function twoNumberSum(array , target){
  const nums ={};

  for(const num of array){
      const match = target - num;
      if(match in nums){
        return [match , num]
      }
      else{
          nums[num]  = true;
      }

  }

  
  return [];
}

const nums = [3, 5, -4,8, 11, 1, -1,6];
const target = 10

console.log(twoNumberSum(nums, target))