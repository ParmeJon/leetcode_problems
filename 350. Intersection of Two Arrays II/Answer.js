/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let num1Obj = {}
    let intersections = []
    for (let i = 0; i < nums1.length; i++ ) {
        if (num1Obj[nums1[i]] !== undefined) {
            num1Obj[nums1[i]] += 1
        } else {
            num1Obj[nums1[i]] = 1
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (num1Obj[nums2[i]] !== undefined && num1Obj[nums2[i]] > 0) {
            intersections.push(nums2[i])
            num1Obj[nums2[i]] -= 1
        } 
    }
    return intersections
};
