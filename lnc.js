//--------------------------------------------------------------------------------------------------
//
// Using vanilla JavaScript only (no libraries), write code in the existing function bodies in this
// javascript file to complete the following exercises. Each exercise defines the function
// signature you should use.
//
//--------------------------------------------------------------------------------------------------

// 1. Character Frequency

/**
 * @description Calculates the character frequencies in a string. Whitespace and punctuation is
 * ignored. Non-english characters are not counted. Case is ignored ('A' and 'a' both count toward
 * the same character).
 *
 * @param {string} sentence  The string whose characters will be counted
 *
 * @returns {object} An object with keys being lowercase characters, and
 *                   values being the character counts.
 * @example
 *  charFreq('Ceres');
 *  // returns { c: 1, e: 2, r: 1, s: 1 }
 */
function charFreq(sentence) {
    var count = {};
    sentence.split('').forEach(function (s) {
        count[s] = count [s] ? count[s] + 1 : 1;
        
    });
    return count;
}



// 2. Longest Increasing Sequence.

/**
 * @description Finds the longest increasing sequence from a given array of integers. A sequence in
 * an array is increasing when each non-last value is followed by a value that is greater than the
 * previous value. If there are multiple contenders of the same length, returns the first occurring
 * sequence. If no increasing sequence of length 2 or greater is found, returns an empty array.
 * Does not mutate array parameter.
 *
 * @param {number[]} seq  An array of integers
 *
 * @returns {number[]} The longest increasing sequence of `seq`
 *
 * @example
 *  longestIncrSequence([1]);
 *  // returns []
 * @example
 *  longestIncrSequence([3, 4, 1, 2]);
 *  // return [3, 4]
 * @example
 *  longestIncrSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10]);
 *  // returns [-43, -1, 0, 11]
 *
 */
function longestIncrSequence(seq) {
    // Your code here
}

// 3. Hanburger Series.

/**
 * @description Takes a start and end integer. Returns an array of the integer series
 *  represented by start and end, except:
 *    - If the integer is divisible by 3, the array value is 'Hanburger'
 *    - If the integer is divisible by 5; 'WithCheese'
 *    - If the integer is divisible by 3 and 5; 'HanburgerWithCheese'
 *
 * @param {number} start  Series start value
 * @param {number} end  Series end value (incl.)
 *
 * @returns {(number|string)[]} Series based on above rules
 *
 * @example
 *  var series = cookingSeries(1, 3);
 *  console.log(series);
 *  // returns [1, 2, 'Hanburger']
 */
function cookingSeries(start, end) {
    // Your code here
}


// ----------------------------------------------------------------------------
// Test your functions below
// ----------------------------------------------------------------------------
