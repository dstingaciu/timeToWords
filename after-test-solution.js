// expecting time to be a string in the format like '8:15' or '12:30'

/*
  edge cases:
  00:00
  12:00
  quarters (2:15, 2:45)

  pre-half hour cases:
  2:03
  2:11

  How long since last hour you've come from

  post-half hour cases:
  2:40 - twenty to three
  2:55 - five to three

  2:45 - quarter to three

  How long until next hour you have
*/

function convertTimeToWords(time) {
  const numToStringObject = {
    0: 'twelve',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'half',
  };

  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } if (time === '12:00') {
    return 'midday';
  }
  // 2:45
  let returnString;

  const splitTime = time.split(':'); // ['2', '03']
  let pastOrTo = false;

  let [leftVal, rightVal] = splitTime; // leftVal = 2, rightVal = 45

  // leftVal = splitTime[0];
  // rightVal = splitTime[1];

  if (rightVal === '00') {
    return `${numToStringObject[leftVal]} o'clock`;
  }

  if (rightVal > 30) {
    pastOrTo = true;
    rightVal = 30 - (rightVal - 30); // 15
    leftVal = Number(leftVal) + 1; // 3
  }
  // 2:14 -> fourteen past two

  const separatorVal = pastOrTo ? 'to' : 'past'; // to
  const leftString = rightVal !== '15' ? numToStringObject[rightVal] : 'quarter'; // quarter
  const rightString = numToStringObject[leftVal]; // three

  // three
  if (rightVal <= 30) {
    returnString = `${leftString} ${separatorVal} ${rightString}`;
  } else {
    returnString = `${rightString} ${separatorVal} ${leftString}`;
  }

  return returnString;
}

module.exports = { convertTimeToWords };
