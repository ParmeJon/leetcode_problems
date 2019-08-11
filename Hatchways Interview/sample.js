// Find the intersection of two arrays
// [10, 1, 3, 5, 8, 8] and [8, 3, 2, 11]
// [8, 8, 3]

// [2, 3, 8, 11]
//            ^
// [1, 3, 5, 8, 8, 10]
//                 ^

function intersection(arr1, arr2) {
  let obj = {};
  let intersections = [];

  for (let i = 0; i < arr1.length; i++) {
    if (obj[arr1[i]] === undefined) {
      obj[arr1[i]] = 1;
    } else {
      obj[arr1[i]] += 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) {
      intersections.push(arr2[i]);
    }
  }

  console.log(intersections);
  return intersections;
}

intersection([10, 1, 3, 5, 8, 8], [8, 3, 2, 11]);

// Comment 1
// .    Comment 2
// .    Comment 3
// .       Comment 4
// .    Comment 5

// Flatten object

const obj = {
  a: "b",
  b: {
    c: "e",
    d: {
      f: "g"
    }
  },
  h: {
    g: "i"
  }
};

const result = {
  a: "b",
  "b.c": "e",
  "b.d.f": "g",
  "h.g": "i"
};

function flattenObj(object) {
  const newObj = {};

  function actualFlatten(obj, extraLetters) {
    for (let key in obj) {
      const newKey = `${extraLetters}${extraLetters ? "." : ""}${key}`;
      if (typeof obj[key] === "string") {
        newObj[newKey] = obj[key];
      } else {
        actualFlatten(obj[key], newKey);
      }
    }
  }

  actualFlatten(object, "");

  return newObj;
}

// console.log( typeof obj["b"] === "string")

console.log(flattenObj(obj));
