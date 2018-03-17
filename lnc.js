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
    sentence.split('').filter(function (sentence) {
        return sentence.match(/[a-z]/i);
    }).forEach(function (sentence) {
        sentence = sentence.toLocaleLowerCase();
        count[sentence] = count[sentence] ? count[sentence] + 1 : 1;
    });
    return count;
};

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
 *  // returns [3, 4]
 * @example
 *  longestIncrSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10]);
 *  // returns [-43, -1, 0, 11]
 *
 */

// function longestIncrSequence(seq) {
    
// }
        this.longestIncrSequence = function (sequence) {
            var i, j, proposals = [], proposal, longestSeq;
            for (i = 0; i < sequence.length; i += 1) {
                proposal = [];
                proposal.push(sequence[i]);
                for (j = i + 1; j < sequence.length; j += 1) {
                    if (sequence[j] > proposal[proposal.length - 1]) {
                        proposal.push(sequence[j]);
                    } else {
                        proposals.push(proposal);
                        break;
                    }
                }
            }
            longestSeq = proposals[0];
            for (i = 1; i < proposals.length; i += 1) {
                if (proposals[i].length > longestSeq.length) {
                    longestSeq = proposals[i];
                }
            }
            return longestSeq;
        };

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
    var result = [];
    var start = start || 0;
    var end = end || 0;

    for (var i = start; i <= end; i++) {
        if (i % 15 === 0) {
            result.push("HanburgerWithCheese")
                        
        }
        else if (i % 3 === 0) {
            result.push("hanburger")
                     
        }
        else if (i % 5 === 0) {
            result.push("withCheese")
                       
        }else {
            result.push(i);
        }
    }
    return result;
}

// ----------------------------------------------------------------------------
// Test your functions below

// Challenge 1: 
console.log(charFreq("my name %$#$##@343342234----ISSs KyYle"));
console.log("--------------------------------------------------------------")
// Challenge 2:
console.log(longestIncrSequence([3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10]));
console.log(longestIncrSequence([3, 4, 1, 2]));
console.log("--------------------------------------------------------------")
// Challenge 3: 
console.log(cookingSeries(1, 15));
// ----------------------------------------------------------------------------
