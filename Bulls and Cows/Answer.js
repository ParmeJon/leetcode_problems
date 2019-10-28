/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0
    let cows = 0
    const cache = {}
    let letterqueue = []
    for (let i=0; i < secret.length; i++) {
        if (secret[i] === guess[i]) {
            bulls++
        } else {
            letterqueue.push(i)
            if (!cache[secret[i]]) {  
                cache[secret[i]] = 1
            } else {
                cache[secret[i]] +=1
            }
        }
    }
    for (let i = 0; i < letterqueue.length; i++) {
        if (cache[guess[letterqueue[i]]] > 0) {
            cows++
            cache[guess[letterqueue[i]]] -=1
        }
    }

    return `${bulls}A${cows}B`
};
