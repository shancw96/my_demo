/**
 * 冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

现在，给出位于一条水平线上的房屋和供暖器的位置，找到可以覆盖所有房屋的最小加热半径。

所以，你的输入将会是房屋和供暖器的位置。你将输出供暖器的最小加热半径。

说明:

给出的房屋和供暖器的数目是非负数且不会超过 25000。
给出的房屋和供暖器的位置均是非负数且不会超过10^9。
只要房屋位于供暖器的半径内(包括在边缘上)，它就可以得到供暖。
所有供暖器都遵循你的半径标准，加热的半径也一样。
示例 1:

输入: [1,2,3],[2]
输出: 1
解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。
示例 2:

输入: [1,2,3,4],[1,4]
输出: 1
解释: 在位置1, 4上有两个供暖器。我们需要将加热半径设为1，这样所有房屋就都能得到供暖。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/heaters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


 /**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    //1.遍历房屋，在房屋内部进行二分查找
    let max = 0
    houses.forEach(house=>{
       max = Math.max(max,getMinHeaderLength(house,heaters))
    })
    // return min
    console.log(max)
    return max
};

function getMinHeaderLength(house,heaters){
  let start = 0;
  let end = heaters.length-1
  let mid 
  while(start<end){
    mid = Math.floor((start+end)/2)
    if(house<=heaters[mid]){
      end = mid
    }else{
      start = mid+1
    }
  }
  if(heaters[start]== house){
    return 0
  }else if( heaters[start] < house){
    //若该加热器的坐标值小于 c ，说明该加热器的坐标与 c 之间没有别的加热器
    return house - heaters[start]
  }else if(start){
    return Math.min(heaters[start] - house, house - heaters[start - 1])
  }else{
    return heaters[start] - house
  }
}

findRadius([1,2,3,4],[1,4])