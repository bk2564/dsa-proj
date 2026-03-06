export function getSteps (digits) {
  const result = []
    let carry = 0
    let lastDigit = digits[digits.length - 1] + 1
    if(lastDigit > 9){
        lastDigit = 0
        carry = 1
    }
    result.unshift(lastDigit)
    for(let i = digits.length - 2; i >= 0; i--){
        let digit = digits[i] + carry
        if(digit > 9){
            carry = 1
            digit = 0
        } else {
            carry = 0
        }
        result.unshift(digit)
    }    
    if(carry == 1) result.unshift(1)

    return result
};