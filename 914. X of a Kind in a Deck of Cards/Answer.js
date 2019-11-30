// /**
//  * @param {number[]} deck
//  * @return {boolean}
//  */
var hasGroupsSizeX = function(deck) {
  if (deck.length === 2) {
    return true;
  }
  if (deck.length < 2) {
    return false;
  }
  const cards = {};
  let minCount = deck.length + 1;
  let currCount = 1;
  let typesOfCards = 0;
  deck.sort();
  for (let i = 0; i < deck.length; i++) {
    let card = deck[i];
    if (deck[i] === deck[i + 1]) {
      currCount++;
    } else {
      minCount = Math.min(minCount, currCount);
      currCount = 1;
    }
    if (cards[card]) {
      cards[card] += 1;
    } else {
      cards[card] = 1;
      typesOfCards++;
    }
  }
  // console.log(cards, minCount)
  let i = 2;
  while (i <= minCount) {
    let cardWorks = 0;
    for (let card in cards) {
      if (cards[card] % i === 0) {
        cardWorks++;
      } else {
        break;
      }
    }
    if (cardWorks === typesOfCards) {
      return true;
    }
    cardWorks = 0;
    i++;
  }
  return false;
};
