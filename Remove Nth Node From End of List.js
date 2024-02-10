var removeNthFromEnd = function(head, n) {
    let count = 0;
    let current_head = head;
    while(current_head)
    {
        ++count;
        current_head = current_head.next;
    }
  
    current_head = head;
   
    let item_delete = count-n;
    let temp_count = 0;

    if(item_delete === 0) return head = head.next;
    while(current_head)
    {
        temp_count++;
        if(item_delete === temp_count)
        {
           current_head.next = current_head.next.next;
            break;
        }
        current_head = current_head.next;
        
    }

    return head;
};
