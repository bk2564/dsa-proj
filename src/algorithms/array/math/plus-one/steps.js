export function getSteps(digits) {
  const result = [];
  const steps = [];

  steps.push({
    action: "original-number",
    digits: [...digits],
    text: `The original number is ${digits.join("")}`,
  });
  let carry = 0;
  let lastDigit = digits[digits.length - 1] + 1;

  steps.push({
    action: "add-last-digit",
    digits: [...digits],
    currentDigit: digits[digits.length - 1],
    resultDigit: lastDigit,
    index: digits.length - 1,
    text: `The last digit, added by 1, is ${lastDigit}`,
  });

  if (lastDigit > 9) {
    carry = 1;
    steps.push({
      action: "carry-set",
      digits: [...digits],
      carry: carry,
      currentDigit: digits[digits.length - 1],
      resultDigit: lastDigit,
      index: digits.length - 1,
      text: `The carry is set to 1, beacuse the last digit added by 1 (${lastDigit}) is greater than 9`,
    });
    lastDigit = 0;
    steps.push({
      action: "digit-set",
      digits: [...digits],
      carry: carry,
      currentDigit: digits[digits.length - 1],
      resultDigit: lastDigit,
      index: digits.length - 1,
      text: `The result digit is now set to 0`,
    });
  }
  result.unshift(lastDigit);
  steps.push({
    action: "result-first-digit",
    digits: [...digits],
    carry: carry,
    currentDigit: digits[digits.length - 1],
    resultDigit: lastDigit,
    result: [...result],
    index: digits.length - 1,
    text: `Putting the result digit in the result array`,
  });
  if (digits.length > 1) {
    steps.push({
      action: "digits-addition",
      digits: [...digits],
      carry: carry,
      currentDigit: digits[digits.length - 1],
      resultDigit: lastDigit,
      result: [...result],
      text: `The input number has more than one digit, traversing it backwards`,
    });
  }
  for (let i = digits.length - 2; i >= 0; i--) {
    let digit = digits[i] + carry;
    steps.push({
      action: "digit-addition",
      digits: [...digits],
      carry: carry,
      currentDigit: digits[i],
      resultDigit: lastDigit,
      result: [...result],
      index: i,
      text: `The digit ${digits[i]} is added to the carry (${carry})`,
    });
    if (digit > 9) {
      carry = 1;
      steps.push({
        action: "carry-set",
        digits: [...digits],
        carry: carry,
        currentDigit: digits[i],
        resultDigit: lastDigit,
        result: [...result],
        index: i,
        text: `The carry is set to 1, beacuse the result digit (${digit}) is greater than 9`,
      });
      digit = 0;
      steps.push({
        action: "digit-set",
        digits: [...digits],
        carry: carry,
        currentDigit: digits[i],
        resultDigit: lastDigit,
        result: [...result],
        index: i,
        text: `The result digit is now set to 0`,
      });
    } else {
      carry = 0;
      steps.push({
        action: "carry-set",
        digits: [...digits],
        carry: carry,
        currentDigit: digits[i],
        resultDigit: lastDigit,
        result: [...result],
        index: i,
        text: `The carry is set to 0, beacuse the result digit (${digit}) is not greater than 9`,
      });
    }
    result.unshift(digit);
    steps.push({
      action: "result-digit",
      digits: [...digits],
      carry: carry,
      currentDigit: digits[i],
      resultDigit: lastDigit,
      result: [...result],
      index: i,
      text: `Putting the result digit at the start of the result array`,
    });
  }
  if (carry == 1) {
    result.unshift(1);
    steps.push({
      action: "result-last-digit-carry",
      digits: [...digits],
      carry: carry,
      result: [...result],
      text: `Hence the carry is 1, putting it at the start of the result array`,
    });
  }

  steps.push({
    action: "result-ready",
    digits: [...digits],
    result: [...result],
    text: `The result array is ready. Returning it`,
  });

  return steps;
}
