 function countRev(s)
    {
     const stack = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '}' && stack.length === 0) {
            count++;
            stack.push('{')
            continue;
        }
        if (s[i] === '{') {
            stack.push('{')
            continue;
        }
        while (stack.length !== 0) {
            const top = stack.pop();
            if (top === '{') break;
        }
    }

    if(stack.length%2!==0) return -1;
    return count+(stack.length/2)

    return count
    }
