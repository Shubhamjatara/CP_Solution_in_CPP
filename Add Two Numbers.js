var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let first = 0;
    let arr = [];
    while(l1||l2)
    { 
            let val1 = 0; let val2 = 0;
            if(!l1) { val1 = 0;} else val1 = l1.val;
            if(!l2){val2=0} else val2= l2.val;

            let add = val1+val2+carry;
           if(add.toString().length==2)
           {
            carry = parseInt(add.toString().charAt(0));
            first = parseInt(add.toString().charAt(1));
            // let first_node = new ListNode(first,null);
            arr.push(first)
           }
           else{
              
               arr.push(add)
               carry = 0;
           }
           
           if(l1) l1 = l1.next;
           if(l2) l2 = l2.next;
           //head = head.next
    }
    if(carry !==0) arr.push(carry)
      let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;

};
