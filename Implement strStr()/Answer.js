// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */

// brute force strategy
var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0
    }
    if (haystack === "") {
        return -1
    }
    if (needle.length > haystack.length) {
        return -1
    }
    let j = 1
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (needle.length === 1) {
                return i
            } else {
            while (j < needle.length) {
                if (haystack[i+j] === needle[j]) {
                    j++
                    if (j === needle.length) {
                        return i
                    }

                } else {
                    j = 1
                    break;
                }
            }
        }
        }
    }
    return -1
};

// built in methods strategy
var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0
    }
    if (haystack === "") {
        return -1
    }
return haystack.indexOf(needle)
};
