
//  * Definition for singly-linked list.
 class ListNode {
      val
      next
      constructor(val, next){
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
}


function addTwoNumbers(l1, l2) {
  let add = 0
    let next1 = l1 ? l1.next : null
    let next2 = l2 ? l2.next : null
    const arraySum = []
    let limit = 0
    let dummyl1 = l1
    let dummyl2 = l2
    let v1 = dummyl1 ? dummyl1.val : null
    let v2 = dummyl2 ? dummyl2.val : null
    let values = v1 + v2 + add
    while((dummyl1 !== null || dummyl2 !==null || add !== 0) || values !== 0){
        values = (v1 + v2 + add) % 10
        if(v1 + v2 + add >= 10) {
            add = 1
        } else add = 0
        next1 = dummyl1 ? dummyl1.next : null
        next2 = dummyl2 ? dummyl2.next : null
        if(dummyl1){
            dummyl1 = dummyl1.next || null
        } 
        if(dummyl2){
            dummyl2 = dummyl2.next || null
        }
        v1 = dummyl1 ? dummyl1.val : 0
        v2 = dummyl2 ? dummyl2.val : 0
        if((dummyl1 !== null || dummyl2 !==null || add !== 0) || values !== 0) arraySum.push(values)
        limit +=1
    }
    return arrayToList(arraySum);
};

function arrayToList(arr){
    if(arr.length == 0) return new ListNode(0)
    let dummy = new ListNode()
    let current = dummy

    for(const n of arr){
        current.next = new ListNode(n)
        current = current.next
    }

    return dummy.next
}

const l1 = arrayToList([1,6,0,3,3,6,7,2,0,1])
const l2 = arrayToList([6,3,0,8,9,6,6,9,6,1])
console.log(addTwoNumbers2(l1, l2))



function addTwoNumbers2(l1, l2) {
    const dummy = new ListNode()
    let current = dummy
    let add = 0
    while(l1 !== null || l2 !== null || add !== 0){
        let sum = add
        if(l1 !== null){
            sum += l1.val
            l1 = l1.next
        }
        if(l2 !== null){
            sum += l2.val
            l1 = l2.next
        }
        add = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next
    }
    return dummy.next
};