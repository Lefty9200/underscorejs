var _ = {};

/* Collections */

/* each */
// did not factor in context argument yet......
_.each = function(list, iteratee, context) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      iteratee(list[i], i, list);
    }
  } else {
    for (var key in list) {
      iteratee(list[key], key, list);
    }
  }
};


/* map */
// did not factor in context argument yet.....
_.map = function(list, iteratee, context) {
  var result = [];
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      result.push(iteratee(list[i], i, list));
    }
  } else {
    for (var key in list) {
      result.push(iteratee(list[key], key, list));
    }
  }
  return result;
};


/* reduce */
// did not factor in context yet......
_.reduce = function(list, iteratee, memo, context) {
  var result = 0;
  if (memo === undefined) {
    memo = 0;
  }
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      result += iteratee(memo, list[i], i, list);
      memo = 0;
    }
  } else {
    for (var key in list) {
      result += iteratee(memo, list[key], key, list);
    }
  }
  return result;
};


// reduceRight 
// delegates to the Javascript 1.8 version.


/* find */
// did not factor in context argument yet......
_.find = function(list, predicate, context) {
  for (var i = 0; i < list.length; i++) {
    if (predicate(list[i]) === true) {
      return list[i];
    }
  }
};


/* filter */
_.filter = function(list, predicate, context) {
  var result = [];
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      if (predicate(list[i]) === true) {
        result.push(list[i]);
      }
    }
  } else {
    for (var key in list) {
      if (predicate(list[key]) === true) {
        result.push(list[key]);
      }
    }
  }
  return result;
};


/* where */


/* findWhere */


/* reject */
// opposite of filter.
// did not factor in context yet......
_.reject = function(list, predicate, context) {
  var result = [];
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      if (predicate(list[i]) === false) {
        result.push(list[i]);
      }
    }
  } else {
    for (var key in list) {
      if (predicate(list[key]) === false) {
        result.push(list[key]);
      }
    }
  }
  return result;
};

/* every */
// did not factor in context yet......
_.every = function(list, predicate, context) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      if (predicate(list[i]) === false) {
        return false;
      } else {
        return true;
      }
    }
  }
};


/* contains */
// did not factor in fromIndex yet......
_.contains = function(list, value, fromIndex) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      return list[i] === value;
    }
  } else {
    for (var key in list) {
      return list[key] === value;
    }
  }
};


/* invoke */


/* pluck */
_.pluck = function(list, propertyName) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    if (list.length !== 0) {
      if (list[i][propertyName] === undefined) {
        result.push(undefined);
      } else {
        result.push(list[i][propertyName]);
      }
    }
  }
  return result;
};


// /* max */
// _.max = function(list, iteratee, context) {
//   if (iteratee === undefined) {

//   } else {

//   }
// };

// /* min */


// Collections test suite
console.log('_ should exist', !!_);

console.log('---TESTING EACH---');
_.each([6, 7, 8], function(number) {
  console.log(number);
});

_.each({a: 'a', b: 'b'}, function(letter) {
  console.log(letter);
});
console.log('---END EACH---');

console.log('---TESTING MAP---');
var nums = _.map([1,2,3], function(number) {
  return number * 2;
});
console.log(nums, 'should be [ 2, 4, 6 ]');
console.log('---END MAP---');

console.log('---TESTING REDUCE---');
function add(a, b) {
  return a + b;
}
console.log(_.reduce([1,2,3], add), 'should be 6');
console.log(_.reduce([1,2,3], add, 10), 'should be 16');
console.log('---END REDUCE---');

console.log('---TESTING FIND---');
function evenNum(num) {
  return num % 2 === 0;
}
console.log(_.find([1, 2, 3, 4, 5, 6], evenNum), 'should be 2');
console.log(_.find([1, 3, 5], evenNum), 'should be undefined');
console.log('---END FIND---');

console.log('---TESTING FILTER---');
console.log(_.filter([1, 2, 3, 4, 5, 6], evenNum), 'should be [2, 4, 6]');
console.log('---END FILTER---');

// console.log('---TESTING WHERE---');
// var listOfBooks = [
//   {title: 'Dune', author: 'Frank Herbert', year: 1976},
//   {title: 'Thinner', author: 'Stephen King', year: 1983},
//   {title: 'A Scanner Darkly', author: 'Philip K. Dick', year: 1979},
//   {title: 'IT', author: 'Stephen King', year: 1985},
//   {title: 'Minority Report', author: 'Philip K. Dick', year: 1979}
// ];
// console.log(_.where(listOfBooks, {author: 'Stephen King', year: 1983}));
// console.log('Answer should be [{title: Thinner, author: Stephen King, year: 1983}]');
// console.log('---END WHERE---');

console.log('---TESTING REJECT---');
console.log(_.reject([1, 2, 3, 4, 5, 6], evenNum), 'should be [1, 3, 5]');
console.log('---END REJECT---');

console.log('---TESTING EVERY---');
console.log(_.every([1, 2, 3, 4, 5, 6], evenNum), 'should be false');
console.log(_.every([2, 4, 6, 8, 10, 12], evenNum), 'should be true');
console.log('---END EVERY---');

console.log('---TESTING CONTAINS---');
console.log(_.contains(['harry', 'potter'], 'harry'), 'should be true');
console.log(_.contains(['harry', 'potter'], 'voldemort'), 'should be false');
console.log('---END CONTAINS---');

console.log('---TESTING PLUCK---');
var cars = [
  {make: 'toyota', year: 1991},
  {make: 'honda', year: 2010},
  {make: 'mercedes', year: 1982}
];
console.log(_.pluck(cars, 'make'), 'should be [ toyota, honda, mercedes ]');
console.log(_.pluck(cars, 'model'), 'should be [undefined, undefined, undefined]');
console.log('---END PLUCK---');


/* Arrays */

/* first */
_.first = function(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    var result = [];
    for (var i = 0; i < n; i++) {
      result.push(array[i]);
    }
    return result;
  }
};


/* last */
_.last = function(array, n) {
  var rev = array.reverse();
  var result = [];
  if (n === undefined) {
    result.unshift(array[0]);
  } else {
    for (var i = 0; i < n; i++) {
      result.unshift(array[i]);
    }
  }
  return result;
};


// Arrays test suite
console.log('---TESTING FIRST---');
console.log(_.first(['james', 'bond']), 'should be james');
console.log(_.first([10, 20, 30, 40], 2), 'should be [ 10, 20 ]');
console.log('---END FIRST---');

console.log('---TESTING LAST---');
console.log(_.last(['one', 'two', 'three']), 'should be "three"');
console.log(_.last(['one', 'two', 'three'], 2), 'should be ["two", "three"]');
console.log('---END LAST---');