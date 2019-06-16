// /**
//  * @param {string[]} strs
//  * @return {string}
//  */

var longestCommonPrefix = function(strs) {
    basePrefix = strs[0]
    if (strs.length === 0) {
        return ""
    }
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(basePrefix) !== 0) {
            basePrefix = basePrefix.substr(0, basePrefix.length - 1)
        }
        if (basePrefix === ""){
            return "";
        }
    }
    return basePrefix
};
