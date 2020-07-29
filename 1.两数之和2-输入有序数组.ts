/*
    问题：给定一个已按照升序排列的有序数组，找到两个数使得它们相加之和等于目标数。
    函数应该返回这两个下标志 index1 和 index2 ，其中 index1 必须小于 index2。

    说明：
        * 返回的下标值 (index1 和 index2) 不是从零开始的。
        * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
        
    实例：
        输入： numbers = [2, 7, 11, 15], target = 9
        输出：[1, 2]
        解释：2 与 7之和等于目标数 9.因此 index1 = 1, index2 = 2。

*/

// 二分法
function twoSum(numbers: number[], target: number) {
    let index1 = 0,
        index2 = 0

    for(let i = 0, len = numbers.length; i < len; i++) {
        let low = i + 1,
        high = len - 1
        
        while(low <= high) {
            let mid = 0
            if((high - low) % 2 === 0) {
                mid = (high - low) / 2 + low
            }
            else {
                mid = Math.floor((high - low)/ 2) + low
            }

            if(numbers[mid] + numbers[i] === target) {
                return [i + 1, mid + 1]
            }
            else if(numbers[mid] + numbers[i] < target) {
                low = mid + 1
            }
            else {
                high = mid - 1
            }

        }
    }
    return [1,1]
}

console.log(twoSum([1,2,3,4,5,6,7,8], 5))